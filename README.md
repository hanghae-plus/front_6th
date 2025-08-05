# 항해플러스 6기 기술블로그

> 항해플러스 6기 수강생들의 학습 과정과 과제 제출 현황을 보여주는 기술블로그

## 📋 프로젝트 소개

항해플러스 6기 수강생들의 과제 제출 현황과 회고 내용을 한눈에 볼 수 있는 정적 사이트입니다. GitHub PR 데이터를 수집하여 수강생별 학습 현황을 시각화하고, 과제 회고 내용을 공유할 수 있는 플랫폼을 제공합니다.

## ✨ 주요 기능

- **수강생 목록**: 모든 수강생의 정보와 과제 제출 현황을 카드 형태로 표시
- **수강생 상세페이지**: 개별 수강생의 과제 목록과 상세 정보 제공
- **과제 상세페이지**: GitHub PR 링크, 배포 링크, 회고 내용 표시
- **댓글 시스템**: GitHub Utterances를 통한 댓글 기능
- **데이터 수집**: GitHub API를 통한 자동 데이터 수집 및 업데이트

## 🏗️ 프로젝트 구조

이 프로젝트는 모노레포 구조로 구성되어 있습니다:

```
packages/
├── app/          # React 웹 애플리케이션 (메인 블로그)
├── crawler/      # NestJS 기반 데이터 수집 서비스
└── domain/       # 공통 타입 정의 및 유틸리티
```

## 🛠️ 기술 스택

### Frontend (app)
- **React 18** - UI 라이브러리
- **TypeScript** - 타입 안전성
- **Vite** - 빌드 도구
- **TailwindCSS** - 스타일링
- **React Router 7** - 라우팅
- **TanStack Query** - 데이터 페칭
- **Zustand** - 상태 관리

### Backend (crawler)
- **NestJS** - Node.js 프레임워크
- **TypeScript** - 타입 안전성
- **GitHub API** - 데이터 수집

### 공통
- **pnpm** - 패키지 매니저
- **ESLint + Prettier** - 코드 품질
- **Playwright** - E2E 테스트
- **Husky** - Git 훅

## 📋 시스템 요구사항

- **Node.js**: >= 22
- **pnpm**: >= 10

## 🚀 시작하기

### 1. 저장소 클론

```bash
git clone https://github.com/YeongseoYoon-hanghae/front_6th.git
cd front_6th
```

### 2. 의존성 설치

```bash
pnpm install
```

### 3. 개발 서버 실행

```bash
pnpm dev
```

개발 서버가 `http://localhost:5173`에서 실행됩니다.

## 📜 주요 스크립트

### 전체 프로젝트
- `pnpm dev` - 개발 서버 실행
- `pnpm build` - 모든 패키지 빌드
- `pnpm lint:fix` - 코드 린팅 및 자동 수정
- `pnpm tsc` - TypeScript 타입 체크
- `pnpm prettier:write` - 코드 포맷팅
- `pnpm preview` - 빌드된 앱 미리보기

### 배포
- `pnpm gh-pages` - GitHub Pages 배포

## 🌐 배포

이 프로젝트는 GitHub Pages를 통해 정적 사이트로 배포됩니다.

- **배포 방식**: Static Site Generation (SSG)
- **호스팅**: GitHub Pages

## 📁 주요 디렉토리 구조

### packages/app/src/
```
src/
├── components/       # 재사용 가능한 컴포넌트
│   ├── layout/      # 레이아웃 컴포넌트
│   └── ui/          # UI 컴포넌트
├── features/        # 도메인별 기능 모듈
│   ├── assignments/ # 과제 관련 기능
│   └── users/       # 사용자 관련 기능
├── pages/           # 페이지 컴포넌트
├── hooks/           # 커스텀 훅
├── providers/       # 컨텍스트 프로바이더
└── lib/             # 유틸리티 함수
```

## 🔧 개발 가이드

### 코드 스타일
- ESLint와 Prettier를 사용한 일관된 코드 스타일
- Husky를 통한 pre-commit 훅으로 코드 품질 보장
- TypeScript strict 모드 활성화

### 커밋 컨벤션
Git 커밋 시 lint-staged가 자동으로 실행되어 코드 포맷팅을 수행합니다.

## 📄 라이선스

이 프로젝트는 교육 목적으로 제작되었습니다.

## 🤝 기여하기

프로젝트에 기여하고 싶으시다면:

1. 이슈를 생성하여 논의
2. Fork 후 feature 브랜치 생성
3. 변경사항 커밋
4. Pull Request 생성

---

<div align="center">
  <strong>항해플러스 6기 기술블로그</strong><br>
  수강생들의 학습 여정을 기록합니다 🚀
</div>
