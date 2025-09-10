export interface MetadataConfig {
  title: string;
  description: string;
  ogImage?: string;
  keywords?: string;
}

export const baseMetadata: MetadataConfig = {
  title: "항해플러스 프론트엔드 6기 - 개발자 성장 스토리",
  description:
    "항해플러스 프론트엔드 6기 수강생들의  React, TypeScript, JavaScript 과제 제출 현황과 학습 과정을 확인하세요.",
  ogImage: "/defaultThumbnail.jpg",
  keywords: "항해플러스, 프론트엔드, 개발자교육, React, TypeScript, JavaScript, 기술면접, 웹개발",
};

export function createMetaTags({
  title,
  description,
  ogImage = "/defaultThumbnail.jpg",
  keywords,
}: MetadataConfig): string {
  return `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="keywords" content="${keywords}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${ogImage}" />
  `;
}
