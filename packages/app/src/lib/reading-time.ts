export interface PrReadingOptions {
  cpmText?: number; // 한국어(CJK) 문자/분 (기본 350 권장)
  wpmCode?: number; // 코드 단어/분 (기본 180)
  includeLatinInText?: boolean; // 본문 내 영문/숫자도 별도 가중치 적용
  wpmLatinText?: number; // 본문 영문/숫자 단어/분 (기본 200)
  minMinutes?: number; // 최소 표기 분 (기본 1)
  anchors?: string[]; // 이 문자열 이후만 계산
}

export interface PrReadingResult {
  minutes: number;
  seconds: number;
  cjkChars: number;
  codeWords: number;
  latinWordsText: number;
  text: string;
  exact: string;
}

const DEFAULTS: Required<PrReadingOptions> = {
  cpmText: 350,
  wpmCode: 180,
  includeLatinInText: false,
  wpmLatinText: 200,
  minMinutes: 1,
  anchors: ["과제 셀프 회고", "과제 셀프"],
};

// fenced code block: ```lang\n ... \n``` 추출
function extractFencedCode(body: string) {
  const blocks: string[] = [];
  const without = body.replace(/```([\w+-]*)\n?([\s\S]*?)```/g, (_m, _lang, code) => {
    blocks.push(String(code ?? "").trim());
    return " ";
  });
  return { blocks, without };
}

// inline code: `code` 추출
function extractInlineCode(body: string) {
  const segments: string[] = [];
  const without = body.replace(/`([^`]+)`/g, (_m, code) => {
    segments.push(String(code ?? "").trim());
    return " ";
  });
  return { segments, without };
}

// 마크다운/HTML 마커 제거(내용 보존 위주)
function stripMdHtmlKeepContent(s: string) {
  return s
    .replace(/<!--[\s\S]*?-->/g, " ") // HTML 주석
    .replace(/\[([^\]]+)\]\((?:[^)]+)\)/g, "$1") // [text](url) -> text
    .replace(/!\[([^\]]*)\]\((?:[^)]+)\)/g, "$1") // ![alt](src) -> alt
    .replace(/(\*\*|__)(.*?)\1/g, "$2") // **bold** __bold__
    .replace(/(\*|_)(.*?)\1/g, "$2") // *em* _em_
    .replace(/~~(.*?)~~/g, "$1") // ~~strike~~
    .replace(/^\s{0,3}>\s?/gm, "") // blockquote
    .replace(/^\s{0,3}#{1,6}\s+/gm, "") // headings
    .replace(/^\s*[-*+]\s+/gm, "") // ul
    .replace(/^\s*\d+\.\s+/gm, "") // ol
    .replace(/^\s*\|?-{3,}.*\|?\s*$/gm, " ") // table separators
    .replace(/\|/g, " ") // table pipes
    .replace(/https?:\/\/\S+/gi, " ") // URLs
    .replace(/@[A-Za-z0-9_-]+/g, " ") // mentions
    .replace(/<[^>]+>/g, " ") // HTML tags
    .replace(/\s+/g, " ")
    .trim();
}

// CJK 문자 수 카운팅 (공백 제외)
function countCjkChars(text: string) {
  const t = text.replace(/\s+/g, "");
  const m = t.match(/[\p{Script=Hangul}\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/gu);
  return m ? m.length : 0;
}

// 라틴 단어 수 카운트
function countLatinWords(s: string) {
  const m = s.match(/[A-Za-z0-9_]+(?:'[A-Za-z0-9_]+)*/g);
  return m ? m.length : 0;
}

// 앵커 이후만 실제 읽는 본문으로 파싱
function sliceAfterFirstAnchor(text: string, anchors: string[]) {
  for (const a of anchors) {
    const i = text.indexOf(a);
    if (i !== -1) return text.slice(i + a.length).trim();
  }
  return text;
}

// 메인
export function calculateReadingTime(body: string, opts?: PrReadingOptions): PrReadingResult {
  const { cpmText, wpmCode, includeLatinInText, wpmLatinText, minMinutes, anchors } = { ...DEFAULTS, ...opts };

  if (!body?.trim()) {
    return {
      minutes: minMinutes,
      seconds: minMinutes * 60,
      cjkChars: 0,
      codeWords: 0,
      latinWordsText: 0,
      text: `${minMinutes}분 읽기`,
      exact: `${minMinutes}분 0초`,
    };
  }

  // 1) 앵커 이후 범위 제한
  const scoped = sliceAfterFirstAnchor(body, anchors);

  // 2) 코드 추출(블록 → 인라인 순서 유지)
  const fenced = extractFencedCode(scoped);
  const inline = extractInlineCode(fenced.without);
  const codeText = [...fenced.blocks, ...inline.segments].join(" ");
  const codeWords = countLatinWords(codeText);

  // 3) 본문 정리(마커 제거, 내용 보존)
  const cleaned = stripMdHtmlKeepContent(inline.without);

  // 4) 카운트
  const cjkChars = countCjkChars(cleaned);
  const latinWordsText = includeLatinInText ? countLatinWords(cleaned) : 0;

  // 5) 시간 계산
  let minutesFloat = cjkChars / cpmText;
  if (codeWords > 0) minutesFloat += codeWords / wpmCode;
  if (latinWordsText > 0) minutesFloat += latinWordsText / wpmLatinText;

  const totalSeconds = Math.max(1, Math.round(minutesFloat * 60));
  const roundedMin = Math.round(totalSeconds / 60);
  const minutes = Math.max(minMinutes, roundedMin);
  const seconds = totalSeconds % 60;

  const text = minutes < 1 ? "1분 미만" : minutes === 1 ? "1분 읽기" : `${minutes}분 읽기`;
  const exact = minutes > 0 ? `${minutes}분${seconds ? ` ${seconds}초` : ""}` : `${seconds}초`;

  return { minutes, seconds, cjkChars, codeWords, latinWordsText, text, exact };
}
