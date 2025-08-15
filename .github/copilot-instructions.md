# 코드 리뷰 가이드라인

## 프로젝트 개요

이 프로젝트는 항해 플러스 프론트엔드 6기 과제 관리 시스템이며, 모노레포 구조를 사용합니다.

- **app**: React + Vite 프론트엔드 애플리케이션
- **domain**: 공통 타입 정의 및 도메인 로직
- **crawler**: NestJS 기반 데이터 크롤링 서비스

## 코드 리뷰 주요 체크포인트

### 1. 아키텍처 & 구조

#### 모노레포 구조
- `packages/` 하위 각 패키지는 독립적인 역할 수행
- `@hanghae-plus/domain` 패키지를 통한 타입 공유
- 패키지 간 의존성은 `workspace:*`로 관리

#### 폴더 구조 컨벤션
```
src/
├── components/          # 재사용 UI 컴포넌트
│   ├── ui/             # 기본 UI 컴포넌트 (shadcn/ui 기반)
│   └── layout/         # 레이아웃 관련 컴포넌트
├── features/           # 기능별 모듈
│   ├── assignments/    # 과제 관련 기능
│   ├── users/          # 유저 관련 기능
│   └── feedbacks/      # 피드백 관련 기능
├── pages/              # 페이지 컴포넌트
├── hooks/              # 커스텀 훅
├── lib/                # 유틸리티 함수
└── providers/          # 컨텍스트 프로바이더
```

### 2. 코딩 스타일 & 컨벤션

#### TypeScript
- **Strict mode** 활성화 (`noUnusedLocals`, `noUnusedParameters` 포함)
- 명시적 타입 정의 권장, `any` 사용 지양
- 도메인 타입은 `@hanghae-plus/domain`에서 import
- 인터페이스 명명: PascalCase (예: `UserWithCommonAssignments`)

#### React 컴포넌트
- **함수형 컴포넌트**만 사용
- **Named export** 권장 (`export { ComponentName }`)
- Props 타입은 컴포넌트 파일 내에 정의
- 복잡한 로직은 커스텀 훅으로 분리

#### import 순서
```typescript
// 1. 외부 라이브러리
import React from "react";
import { Link } from "react-router";

// 2. 내부 모듈 (절대경로 @로 시작)
import { Button, Card } from "@/components";
import { useUsers } from "@/features";

// 3. 상대경로
import "./styles.css";
```

#### 스타일링
- **Tailwind CSS** 사용
- 컴포넌트 variant는 **class-variance-authority (cva)** 활용
- 클래스 병합은 `cn()` 유틸 함수 사용
- shadcn/ui 기반 UI 컴포넌트 시스템

### 3. 성능 & 최적화

#### React 최적화
- `useMemo`, `useCallback` 적절히 사용
- 불필요한 리렌더 방지
- 로딩 상태 관리는 `Suspense` 활용

#### 번들 최적화
- 절대경로 import (`@/`) 사용
- 트리 쉐이킹을 위한 named export
- 코드 스플리팅 고려

### 4. 데이터 관리

#### 상태 관리
- 전역 상태는 **Zustand**
- 서버 상태는 **TanStack Query**
- 로컬 상태는 `useState`, `useReducer` 사용

#### 타입 안전성
- API 응답 타입 정의 필수
- 공통 타입은 `@hanghae-plus/domain` 활용
- 런타임 타입 검증도 고려

### 5. 테스트

#### E2E 테스트
- **Playwright** 프레임워크 사용
- 주요 사용자 플로우 커버
- CI/CD 파이프라인 연동

#### 테스트 명령어
```bash
# E2E 테스트 실행
pnpm test:e2e

# UI 모드로 테스트 실행
pnpm test:e2e:ui
```

### 6. 코드 품질

#### 린트 & 포매팅
- **ESLint** + **Prettier** 설정 준수
- **TypeScript ESLint** 규칙 적용
- **Husky** + **lint-staged**로 커밋 전 검증

#### 필수 검증 명령어
```bash
# 타입 체크
pnpm tsc

# 린트 체크 및 자동 수정
pnpm lint:fix

# 코드 포매팅
pnpm prettier:write
```

### 7. Git 컨벤션

#### 커밋 메시지 포맷
```
type(scope): 간단 설명

상세 설명 (선택)

feat: 기능 추가
fix: 버그 수정
refactor: 리팩토링
style: 스타일 변경
docs: 문서 수정
test: 테스트 추가/수정
chore: 빌드/도구 관련 변경
```

#### 브랜치 전략
- 기능 브랜치는 `feat/#이슈번호` 형식
- 메인 브랜치로 PR 생성

### 8. 성능 체크리스트

#### 렌더링 성능
- [ ] 불필요한 리렌더 방지
- [ ] 적절한 메모이제이션 적용
- [ ] 대용량 리스트는 가상화 고려

#### 번들 사이즈
- [ ] 불필요한 의존성 제거
- [ ] 동적 import 사용
- [ ] 트리 쉐이킹 최적화

#### 접근성(a11y)
- [ ] 시맨틱 HTML 사용
- [ ] 적절한 aria 속성 추가
- [ ] 키보드 내비게이션 지원

### 9. 보안 고려사항

- [ ] XSS 방지를 위한 데이터 정제
- [ ] 클라이언트에서 민감 정보 노출 방지
- [ ] HTTPS 사용 강제
- [ ] 의존성 보안 취약점 정기 점검

## 리뷰 체크리스트

### 필수 체크
- [ ] TypeScript 컴파일 에러 없음
- [ ] ESLint 규칙 준수
- [ ] 적절한 타입 정의
- [ ] 성능 최적화 고려
- [ ] 접근성 준수
- [ ] 테스트 커버리지
- [ ] 코드 가독성
- [ ] 보안 이슈 없음

### 권장 사항
- [ ] 코드 재사용성 고려
- [ ] 적절한 에러 핸들링
- [ ] 로딩 상태 관리
- [ ] 사용자 경험 개선
- [ ] 문서화 (JSDoc 등)

일관성 있고, 고품질의 코드를 작성하기 위해 위 가이드라인을 따라주세요.
