export const MOCK_PR = {
  url: 'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/pulls/77',
  id: 2660823347,
  node_id: 'PR_kwDOO_cYE86emPEz',
  html_url: 'https://github.com/hanghae-plus/front_6th_chapter1-1/pull/77',
  diff_url: 'https://github.com/hanghae-plus/front_6th_chapter1-1/pull/77.diff',
  patch_url:
    'https://github.com/hanghae-plus/front_6th_chapter1-1/pull/77.patch',
  issue_url:
    'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/issues/77',
  number: 77,
  state: 'open',
  locked: false,
  title: '[9팀 신홍준] Chapter 1-1. 프레임워크 없이 SPA 만들기 ',
  user: {
    login: 'jun17183',
    id: 64164782,
    node_id: 'MDQ6VXNlcjY0MTY0Nzgy',
    avatar_url: 'https://avatars.githubusercontent.com/u/64164782?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/jun17183',
    html_url: 'https://github.com/jun17183',
    followers_url: 'https://api.github.com/users/jun17183/followers',
    following_url:
      'https://api.github.com/users/jun17183/following{/other_user}',
    gists_url: 'https://api.github.com/users/jun17183/gists{/gist_id}',
    starred_url: 'https://api.github.com/users/jun17183/starred{/owner}{/repo}',
    subscriptions_url: 'https://api.github.com/users/jun17183/subscriptions',
    organizations_url: 'https://api.github.com/users/jun17183/orgs',
    repos_url: 'https://api.github.com/users/jun17183/repos',
    events_url: 'https://api.github.com/users/jun17183/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/jun17183/received_events',
    type: 'User',
    user_view_type: 'public',
    site_admin: false,
  },
  body: '## 과제 체크포인트\r\n\r\n### 배포 링크\r\n\r\nhttps://jun17183.github.io/front_6th_chapter1-1/\r\n\r\n### 기본과제\r\n\r\n#### 상품목록\r\n\r\n**상품 목록 로딩**\r\n\r\n- [x] 페이지 접속 시 로딩 상태가 표시된다\r\n- [x] 데이터 로드 완료 후 상품 목록이 렌더링된다\r\n- [x] 로딩 실패 시 에러 상태가 표시된다\r\n- [x] 에러 발생 시 재시도 버튼이 제공된다\r\n\r\n**상품 목록 조회**\r\n\r\n- [x] 각 상품의 기본 정보(이미지, 상품명, 가격)가 카드 형태로 표시된다\r\n\r\n**한 페이지에 보여질 상품 수 선택**\r\n\r\n- [x] 드롭다운에서 10, 20, 50, 100개 중 선택할 수 있으며 기본 값은 20개 이다.\r\n- [x] 선택 변경 시 즉시 목록에 반영된다\r\n\r\n**상품 정렬 기능**\r\n\r\n- [x] 상품을 가격순/인기순으로 오름차순/내림차순 정렬을 할 수 있다.\r\n- [x] 드롭다운을 통해 정렬 기준을 선택할 수 있다\r\n- [x] 정렬 변경 시 즉시 목록에 반영된다\r\n\r\n**무한 스크롤 페이지네이션**\r\n\r\n- [x] 페이지 하단 근처 도달 시 다음 페이지 데이터가 자동 로드된다\r\n- [x] 스크롤에 따라 계속해서 새로운 상품들이 목록에 추가된다\r\n- [x] 새 데이터 로드 중일 때 로딩 인디케이터와 스켈레톤 UI가 표시된다\r\n- [x] 홈 페이지에서만 무한 스크롤이 활성화된다\r\n\r\n**상품을 장바구니에 담기**\r\n\r\n- [x] 각 상품에 장바구니 추가 버튼이 있다\r\n- [x] 버튼 클릭 시 해당 상품이 장바구니에 추가된다\r\n- [x] 추가 완료 시 사용자에게 알림이 표시된다\r\n\r\n**상품 검색**\r\n\r\n- [x] 상품명 기반 검색을 위한 텍스트 입력 필드가 있다\r\n- [x] 검색 버튼 클릭으로 검색이 수행된다\r\n- [x] Enter 키로 검색이 수행된다\r\n- [x] 검색어와 일치하는 상품들만 목록에 표시된다\r\n\r\n**카테고리 선택**\r\n\r\n- [x] 사용 가능한 카테고리들을 선택할 수 있는 UI가 제공된다\r\n- [x] 선택된 카테고리에 해당하는 상품들만 표시된다\r\n- [x] 전체 상품 보기로 돌아갈 수 있다\r\n- [x] 2단계 카테고리 구조를 지원한다 (1depth, 2depth)\r\n\r\n**카테고리 네비게이션**\r\n\r\n- [x] 현재 선택된 카테고리 경로가 브레드크럼으로 표시된다\r\n- [x] 브레드크럼의 각 단계를 클릭하여 상위 카테고리로 이동할 수 있다\r\n- [x] "전체" > "1depth 카테고리" > "2depth 카테고리" 형태로 표시된다\r\n\r\n**현재 상품 수 표시**\r\n\r\n- [x] 현재 조건에서 조회된 총 상품 수가 화면에 표시된다\r\n- [x] 검색이나 필터 적용 시 상품 수가 실시간으로 업데이트된다\r\n\r\n#### 장바구니\r\n\r\n**장바구니 모달**\r\n\r\n- [] 장바구니 아이콘 클릭 시 모달 형태로 장바구니가 열린다\r\n- [] X 버튼이나 배경 클릭으로 모달을 닫을 수 있다\r\n- [] ESC 키로 모달을 닫을 수 있다\r\n- [] 모달에서 장바구니의 모든 기능을 사용할 수 있다\r\n\r\n**장바구니 수량 조절**\r\n\r\n- [] 각 장바구니 상품의 수량을 증가할 수 있다\r\n- [] 각 장바구니 상품의 수량을 감소할 수 있다\r\n- [] 수량 변경 시 총 금액이 실시간으로 업데이트된다\r\n\r\n**장바구니 삭제**\r\n\r\n- [] 각 상품에 삭제 버튼이 배치되어 있다\r\n- [] 삭제 버튼 클릭 시 해당 상품이 장바구니에서 제거된다\r\n\r\n**장바구니 선택 삭제**\r\n\r\n- [] 각 상품에 선택을 위한 체크박스가 제공된다\r\n- [] 선택 삭제 버튼이 있다\r\n- [] 체크된 상품들만 일괄 삭제된다\r\n\r\n**장바구니 전체 선택**\r\n\r\n- [] 모든 상품을 한 번에 선택할 수 있는 마스터 체크박스가 있다\r\n- [] 전체 선택 시 모든 상품의 체크박스가 선택된다\r\n- [] 전체 해제 시 모든 상품의 체크박스가 해제된다\r\n\r\n**장바구니 비우기**\r\n\r\n- [] 장바구니에 있는 모든 상품을 한 번에 삭제할 수 있다\r\n\r\n#### 상품 상세\r\n\r\n**상품 클릭시 상세 페이지 이동**\r\n\r\n- [x] 상품 목록에서 상품 이미지나 상품 정보 클릭 시 상세 페이지로 이동한다\r\n- [x] URL이 `/product/{productId}` 형태로 변경된다\r\n- [x] 상품의 자세한 정보가 전용 페이지에서 표시된다\r\n\r\n**상품 상세 페이지 기능**\r\n\r\n- [x] 상품 이미지, 설명, 가격 등의 상세 정보가 표시된다\r\n- [x] 전체 화면을 활용한 상세 정보 레이아웃이 제공된다\r\n\r\n**상품 상세 - 장바구니 담기**\r\n\r\n- [x] 상품 상세 페이지에서 해당 상품을 장바구니에 추가할 수 있다\r\n- [x] 페이지 내에서 수량을 선택하여 장바구니에 추가할 수 있다\r\n- [x] 수량 증가/감소 버튼이 제공된다\r\n\r\n**관련 상품 기능**\r\n\r\n- [x] 상품 상세 페이지에서 관련 상품들이 표시된다\r\n- [x] 같은 카테고리(category2)의 다른 상품들이 관련 상품으로 표시된다\r\n- [x] 관련 상품 클릭 시 해당 상품의 상세 페이지로 이동한다\r\n- [x] 현재 보고 있는 상품은 관련 상품에서 제외된다\r\n\r\n**상품 상세 페이지 내 네비게이션**\r\n\r\n- [x] 상품 상세에서 상품 목록으로 돌아가는 버튼이 제공된다\r\n- [x] 브레드크럼을 통해 카테고리별 상품 목록으로 이동할 수 있다\r\n- [x] SPA 방식으로 페이지 간 이동이 부드럽게 처리된다\r\n\r\n#### 사용자 피드백 시스템\r\n\r\n**토스트 메시지**\r\n\r\n- [x] 장바구니 추가 시 성공 메시지가 토스트로 표시된다\r\n- [] 장바구니 삭제, 선택 삭제, 전체 삭제 시 알림 메시지가 표시된다\r\n- [x] 토스트는 3초 후 자동으로 사라진다\r\n- [x] 토스트에 닫기 버튼이 제공된다\r\n- [x] 토스트 타입별로 다른 스타일이 적용된다 (success, info, error)\r\n\r\n### 심화과제\r\n\r\n#### SPA 네비게이션 및 URL 관리\r\n\r\n**페이지 이동**\r\n\r\n- [x] 어플리케이션 내의 모든 페이지 이동(뒤로가기/앞으로가기를 포함)은 하여 새로고침이 발생하지 않아야 한다.\r\n\r\n**상품 목록 - URL 쿼리 반영**\r\n\r\n- [x] 검색어가 URL 쿼리 파라미터에 저장된다\r\n- [x] 카테고리 선택이 URL 쿼리 파라미터에 저장된다\r\n- [x] 상품 옵션이 URL 쿼리 파라미터에 저장된다\r\n- [x] 정렬 조건이 URL 쿼리 파라미터에 저장된다\r\n- [x] 조건 변경 시 URL이 자동으로 업데이트된다\r\n- [x] URL을 통해 현재 검색/필터 상태를 공유할 수 있다\r\n\r\n**상품 목록 - 새로고침 시 상태 유지**\r\n\r\n- [x] 새로고침 후 URL 쿼리에서 검색어가 복원된다\r\n- [x] 새로고침 후 URL 쿼리에서 카테고리가 복원된다\r\n- [x] 새로고침 후 URL 쿼리에서 옵션 설정이 복원된다\r\n- [x] 새로고침 후 URL 쿼리에서 정렬 조건이 복원된다\r\n- [x] 복원된 조건에 맞는 상품 데이터가 다시 로드된다\r\n\r\n**장바구니 - 새로고침 시 데이터 유지**\r\n\r\n- [x] 장바구니 내용이 브라우저에 저장된다\r\n- [x] 새로고침 후에도 이전 장바구니 내용이 유지된다\r\n- [] 장바구니의 선택 상태도 함께 유지된다\r\n\r\n**상품 상세 - URL에 ID 반영**\r\n\r\n- [x] 상품 상세 페이지 이동 시 상품 ID가 URL 경로에 포함된다 (`/product/{productId}`)\r\n- [x] URL로 직접 접근 시 해당 상품의 상세 페이지가 자동으로 로드된다\r\n\r\n**상품 상세 - 새로고침시 유지**\r\n\r\n- [x] 새로고침 후에도 URL의 상품 ID를 읽어서 해당 상품 상세 페이지가 유지된다\r\n\r\n**404 페이지**\r\n\r\n- [x] 존재하지 않는 경로 접근 시 404 에러 페이지가 표시된다\r\n- [x] 홈으로 돌아가기 버튼이 제공된다\r\n\r\n#### AI로 한 번 더 구현하기\r\n\r\n- [] 기존에 구현한 기능을 AI로 다시 구현한다.\r\n- [] 이 과정에서 직접 가공하는 것은 최대한 지양한다.\r\n\r\n\r\n## 테스트 코드 수정\r\n- \'총 개의 상품\' 을 \'총 n개의 상품\' 과 같은 형태로 변경\r\n- 테스트 후 state 초기화\r\n- 너무 빠른 속도로 뒤로가기/앞으로가기 시 생기던 렌더링 문제를 해결하기 위해 속도 지연 추가 (이 부분이 문제가 될 수도 있음을 인지하고 있습니다...)\r\n\r\n\r\n## 과제 셀프회고\r\n\r\n<!-- 과제에 대한 회고를 작성해주세요 -->\r\n실무에서는 AI는 커녕 인터넷도 안 되는 환경에서도 종종 일했던 터라 최대한 AI를 활용해 보는 것이 목표였습니다. 하지만 고기도 먹어 본 사람이 더 잘 먹는다는 것처럼 막상 사용하려니 AI와 스스로의 작업 비중이나 역할을 분명하게 나누지 못했습니다.\r\n\r\n처음엔 한꺼번에 너무 많은 내용을 주문했습니다. \r\n"순수 JS로 SPA를 구현하는 과제를 진행 중이야. 최대한 리액트처럼 구현했으면 해.\r\n옵저버 패턴을 활용하여 state를 관리하고 이를 각 페이지나 컴포넌트에서 구독한 뒤\r\n이에 따라 페이지 렌더링이 이루어졌으면 해. 라우터도 조건에 맞게 구현해줘.\r\n..."\r\n\r\n그래서 첫째날 바로 한 사이트가 뚝딱 만들어 졌습니다.\r\n그러고 테스트를 돌리자 죄다 통과하지 못했습니다.\r\n되돌아보면 /총 개의 상품/ 부분이 /총 n개의 상품/ 과 같이 구현되어서 매치가 되지 않았던 것 뿐인데 직접 작성한 코드가 아니다 보니 파악 자체가 힘들었습니다.\r\n\r\n새로 과제를 진행하기로 했습니다. 작업 순서를 정하고 단위를 작게 나누어 이에 따라 AI에게 주문했습니다.\r\n\r\n"우선 State Manager의 상위 클래스부터 제작하려 해. 구독과 감지 메서드는 필수로 있어야 하고 이 외 기능은 바로 코드 적용하지 말고 먼저 설명 부탁해."\r\n\r\n이렇게 진행하다 보니 나름 순탄하게 흘러갔습니다. 코드 이해도도 높고 버그도 많이 줄었습니다. 하지만 이 과정에서 이미 꽤 많은 시간이 흐른 상태였습니다.\r\n\r\n이때 AI 사용량이 바닥이 나고 맙니다. cursor claude 4.0을 사용 중이었는데 그동안 너무 많은 코드 작업을 맡겼던 것 같습니다. 그래서 다른 AI를 사용하려 하니 성능이 현저히 떨어지고, 그동안의 맥락을 따라가지 못하였습니다.\r\n\r\n이후로는 거의 직접 작업을 하게 되었습니다. 이 과정에서 시간도 쫓기고 버그도 많이 생겨 필수 과제만 통과하는 것을 목표로 하였고 어찌저찌 완성은 했지만 아쉬움이 많이 남습니다.\r\n\r\n그럼에도 고무적인 부분이 있습니다. 과제를 진행하는 동안 AI와 스스로 개발하는 비율이 8:2, 6:4, 3:7과 같이 바뀌는 과정을 겪으며 어떻게 AI를 사용해야 하는지 많이 깨달을 수 있었습니다.\r\n\r\n\r\n### 기술적 성장\r\n\r\n<!-- 예시\r\n- 새로 학습한 개념\r\n- 기존 지식의 재발견/심화\r\n- 구현 과정에서의 기술적 도전과 해결\r\n-->\r\n옵저버 패턴에 대해 대충은 알고 있었지만 정확히 어떤 식으로 동작하는지, 어떤 형태를 띄는지는 잘 몰랐기에 이번 기회에 꼭 한번 사용해 보고 싶었습니다.\r\n\r\n덕분에 어느 정도 옵저버 패턴과 좀 더 친숙해 질 수 있는 시간이었고 더하여 렌더링이나 State 관리에 대해서도 조금 더 시야가 넓어졌지 않나 생각합니다.\r\n\r\n### 자랑하고 싶은 코드\r\n\r\n<!-- 예시\r\n- 특히 만족스러운 구현\r\n- 리팩토링이 필요한 부분\r\n- 코드 설계 관련 고민과 결정\r\n-->\r\n\r\n아무래도 옵저버 패턴을 자랑하고 싶습니다. 아무래도 어떤 디자인 패턴을 인지하고 적극적으로 사용해 본 적은 처음이라 스스로 뿌듯한 부분입니다.\r\n\r\n```js\r\nclass StateManager {\r\n  ...\r\n\r\n  subscribe(keys, observer) {\r\n    const keyArray = Array.isArray(keys) ? keys : [keys];\r\n\r\n    // 각 키에 대해 옵저버 등록\r\n    keyArray.forEach((key) => {\r\n      if (!this.observers[key]) this.observers[key] = [];\r\n      this.observers[key].push(observer);\r\n    });\r\n\r\n    // 구독 해제 함수 반환\r\n    return () => {\r\n      keyArray.forEach((key) => {\r\n        if (this.observers[key]) {\r\n          const index = this.observers[key].indexOf(observer);\r\n          if (index > -1) this.observers[key].splice(index, 1);\r\n        }\r\n      });\r\n    };\r\n  }\r\n\r\n  /**\r\n   * 특정 키를 구독한 모든 옵저버에게 상태 변경 알림\r\n   *\r\n   * @param {string} key - 변경된 상태 키\r\n   * @param {*} value - 새로운 값\r\n   */\r\n  notify(key, value) {\r\n    if (this.observers[key]) {\r\n      this.observers[key].forEach((observer) => observer(value, key, this.state));\r\n    }\r\n  }\r\n\r\n  ...\r\n}\r\n```\r\n\r\n```js\r\nclass ProductListPage {\r\n  ...\r\n\r\n  /**\r\n   * 상태 구독 설정\r\n   */\r\n  setupSubscriptions() {\r\n    // 로딩 상태 구독 (메인 로딩)\r\n    stateManager.productList.subscribe(["loading"], () => {\r\n      this.renderLoading();\r\n    });\r\n\r\n    // 추가 로딩 상태 구독 (무한 스크롤용)\r\n    stateManager.productList.subscribe(["isLoadingMore"], () => {\r\n      this.renderInfiniteScrollLoading();\r\n    });\r\n\r\n    // 상품 목록 구독\r\n    stateManager.productList.subscribe(["products"], () => {\r\n      this.renderProducts();\r\n    });\r\n\r\n    // 총 상품 수 구독\r\n    stateManager.productList.subscribe(["totalProducts"], () => {\r\n      this.updateProductCount();\r\n    });\r\n\r\n    // 필터(정렬, 카테고리, 검색어, 페이지 크기) 구독\r\n    stateManager.productList.subscribe(["sort", "category", "searchQuery", "pageSize"], () => {\r\n      stateManager.productList.loadProducts();\r\n    });\r\n  }\r\n\r\n  ...\r\n}\r\n```\r\n\r\n### 개선이 필요하다고 생각하는 코드\r\n\r\n<!-- 예시\r\n- 특히 만족스러운 구현\r\n- 리팩토링이 필요한 부분\r\n- 코드 설계 관련 고민과 결정\r\n-->\r\n\r\n1. 렌더링 방식\r\nurl 이동 -> 초기 렌더링 -> state 변화 감지 -> state에 따른 렌더링\r\n과 같은 형태로 구현해 보았는데, 이 과정에서 동기화 문제라던가 렌더링이 되기 전 페이지 이동 등 생명주기(라고 표현하는 것이 맞는지 의문) 관리가 제대로 되지 못하였지 않나 생각합니다.\r\n\r\n2. 검색조건 state와 url 동기화\r\n검색조건을 state에 담아 사용하고 있지만 결국 url과도 동기화해야 하기 때문에 검색조건 정보가 두 군데서 관리되는 느낌이었습니다.\r\n\r\n사용자가 직접 url을 치고 들어올 수도 있기에 url이 정보의 근원이라는 원칙을 정하긴 했지만 그럼에도 결국 state 값에 따라 구독 콜백 함수가 실행되는 형태이기에 주객전도가 된 것 같았습니다.\r\n\r\nstate와 url 간의 동기화 및 관리 방식이 궁금합니다.\r\n\r\n3. 단일 책임 원칙\r\n이번에 최대한 단일 책임 원칙을 지키며 작업하려 했습니다.\r\n하지만 많은 부분에서 이를 놓친 것 같습니다. 과제 제출 후에도 리팩토링을 진행하며 살펴볼 계획입니다.\r\n\r\n### 학습 효과 분석\r\n\r\n<!-- 예시\r\n- 가장 큰 배움이 있었던 부분\r\n- 추가 학습이 필요한 영역\r\n- 실무 적용 가능성\r\n-->\r\n가장 큰 배움은 AI 활용입니다. AI에게 어떻게 일을 맡겨야 하는지, AI가 작업한 코드를 어떻게 관리해야 할지 등 많은 것을 느낀 시간이었습니다.\r\n\r\n상태 관리와 렌더링 방식에 대해서도 시야가 넓어진 느낌입니다.\r\n직접 구현해 보니 어떤 이슈가 발생할 수 있는지, 어떤 코드가 확장성이 좋은지 등을 알게 되었습니다.\r\n\r\n그렇기에 오히려 이 부분에 대해 추가 학습이 필요하다고 느꼈습니다.\r\n올바른 렌더링 방식은 무엇인지, 실제 router는 어떻게 동작하는지,\r\n전역 상태는 어디까지 관리해야 하는지 등 공부하고 싶은 것이 많아진 과제였습니다.\r\n\r\n### 과제 피드백\r\n\r\n<!-- 예시\r\n- 과제에서 모호하거나 애매했던 부분\r\n- 과제에서 좋았던 부분\r\n-->\r\n\r\n우선 주제 자체가 마음에 들었습니다. 한번쯤은 직접 해보려고 했지만 선뜻 발걸음이 떼지지 않았는데 이렇게 하게 되어 좋았습니다. 어떻게 보면 짧은 시간, 적은 내용일 수도 있지만 이 안에서도 프론트엔드 개발자로 마주할 수 있는 고민을 미리 느껴볼 수 있었지 않았나 생각합니다.\r\n\r\n테스트코드를 활용한 과제 통과 여부 확인도 좋았습니다.\r\n물론 기능은 잘 돌아가는데 왜 테스트가 통과하지 않는지 등과 같은 의문이 있었지만, 모두 실무에서도 충분히 겪을 법한 상황이라 짜증이 나는 한편 웃음이 나오기도 했습니다.\r\n\r\n### AI 활용 경험 공유하기\r\n\r\n<!-- 예시\r\n- 사용한 AI 도구 (예: ChatGPT, Copilot, Claude, Cursor, ...)\r\n- 프롬프트를 작성한 과정\r\n- AI가 일을 더 잘 하게 만든 방법\r\n- 내가 작성한 코드와 비교하기\r\n-->\r\n\r\n우선 진행하려는 작업을 정의하고 이에 대해 AI와 충분히 대화를 하는 편이 좋았습니다. 필요 작업을 명세하고 이를 문서로 만든 뒤, 이 문서를 기준으로 작업을 진행하면 속도도 빠르고 코드 이해도도 많이 챙길 수 있었습니다.\r\n\r\nAI에게 맡길 작업의 단위도 되도록이면 작게 작게, 단위테스트와 비슷한 단위로 가져가는 것이 좋았습니다. \r\n\r\n다만 테스트 파일을 직접 읽고 이에 맡게 처리하라는 방식은 좋지 못하였습니다. 어떻게든 테스트를 통과하기 위해 작업하다 보니 코드가 어그러졌습니다.\r\n\r\n가장 크게 느낀 부분은, 확실히 성능 좋은 최신 버전의 AI가 그렇지 못한 AI보다 월등히 일을 잘한다는 겁니다...ㅎㅎ\r\n\r\n## 리뷰 받고 싶은 내용\r\n\r\n<!--\r\n피드백 받고 싶은 내용을 구체적으로 남겨주세요\r\n모호한 요청은 피드백을 남기기 어렵습니다.\r\n\r\n참고링크: https://chatgpt.com/share/675b6129-515c-8001-ba72-39d0fa4c7b62\r\n\r\n모호한 질문의 예시)\r\n- 무엇을 질문해야 할지 몰라서 코치님이 보시기에 고쳐야할것들 전반적으로 피드백 부탁드립니다.\r\n- 코드 스타일에 대한 피드백 부탁드립니다.\r\n- 코드 구조에 대한 피드백 부탁드립니다.\r\n- 개념적인 오류에 대한 피드백 부탁드립니다.\r\n- 추가 구현이 필요한 부분에 대한 피드백 부탁드립니다.\r\n\r\n구체적인 질문의 예시)\r\n- 파일A의 함수B와 그 안의 변수명을 보면 직관성이 떨어지는 것 같습니다. 함수와 변수 이름을 더 명확하게 지을 방법에 대해 조언해 주실 수 있나요?\r\n- 현재 파일 단위로 코드를 분리했지만, 이번 주차 발제를 기준으로 봤을 때 모듈화나 계층화에서 부족함이 있는 것 같습니다. 특히 A와 B 부분에서 모듈화를 더 진행할지 그대로 둘지 고민하였습니다. (...구체적인 고민 사항 적기...). 코치님의 의견이 궁금합니다.\r\n- 옵저버 패턴을 사용해 상태 관리 로직을 구현해 보려 했습니다. 제가 구현한 코드가 옵저버 패턴에 맞게 잘 구성되었는지 검토해 주시고, 보완할 부분을 제안해 주실 수 있을까요?\r\n- 컴포넌트 A를 테스트 할 때 B와의 의존성 때문에 테스트 코드를 작성하려다 포기했습니다. A와 B의 의존성을 낮추고 테스트 가능성을 높이는 구조 개선 방안이 있을까요?\r\n-->\r\n\r\n- 질문에 앞서 코드 구조\r\nrouter.js는 각 페이지의 render 메서드를 호출한 뒤 렌더링이 완료되면 mounted 메서드를 호출하고 있습니다. 그리고 각 페이지의 mounted 메서드에선 상태 구독 설멍 메서드를 호출하고 있습니다.\r\n\r\n(render -> 완료 -> mounted -> 상태 구독 -> 상태에 따른 rerender)\r\n\r\n1.\r\n목록 페이지에서 상품 목록을 불러오기 전 url에서 검색 조건을 읽어 이를 state와 맞추는 작업을 합니다. 그럼 state가 변경될 것이고 이 state를 구독하고 있는 컴포넌트, 페이지들은 리렌더링이 됩니다.\r\n\r\n여기서 의문이 생기는 것이, 결국 모든 기능의 중심은 state인데 정보의 원천이 url인 것이 어색합니다. 보통 실무에선 state와 url의 동기화 문제를 어떻게 해결하나요?\r\n\r\n2.\r\n위와 같은 렌더링 방식에서 unmount 함수는 어떻게 관리해야 할지 모르겠습니다. \r\n\r\ninnerHTML을 사용하고 있기에 window 이벤트 같은 것을 제외하면 굳이 unmount 함수를 구현할 필요가 없나 싶기도 하지만, advanced.spec 테스트 "브라우저 뒤로가기/앞으로가기가 올바르게 작동한다" 항목에서\r\n너무 빠르게 페이지 이동이 발생하다 보니 url은 목록 페이지인데 뒤늦게 상품 페이지가 렌더링이 된 것 같아 결국 테스트 코드를 손보게 되었습니다.\r\n\r\nunmount는 언제 사용하는지, 위와 같은 문제를 unmount 함수로 어떻게 해결할 수 있을지 궁금합니다.\r\n\r\n3.\r\n옵저버 패턴을 사용해 상태 관리 로직을 구현해 보려 했습니다. 제가 구현한 코드가 옵저버 패턴에 맞게 잘 구성되었는지 검토해 주시고, 보완할 부분을 제안해 주실 수 있을까요? (예시 질문에 있던 항목이지만 제 생각과 너무 일치하여 가져왔습니다!)\r\n\r\n\r\n## 팀원들과 코드 리뷰\r\n\r\n리뷰 받고 싶은 내용 \r\n검색 조건을 state와 url 두 군데서 관리하는 형식이 옳은 방향인가 의문이 듭니다. \r\n\r\n사용자가 직접 url을 치고 들어올 수 있는 가능성도 있기에 url을 정보의 근원이지만 렌더링이나 상품 조회 등은 모두 state를 기준으로 동작하기에 뭔가 이상하게 느껴집니다.\r\n\r\n그렇다고 검색 조건만 url에서 담당, 나머지 상품 정보 등은 state에서 관리하는 방식은 통일성이 없는 거 같다는 생각이 듭니다.\r\n\r\n현재 코드는 url을 정보의 근원으로 두고 state를 url에 맞게 동기화 하는 방식인데, 의견 여쭤보고 싶네요.\r\n\r\n\r\n```js\r\n// state/ProductListManager.js\r\nclass ProductListManager extends StateManager {\r\n  constructor() {\r\n    super();\r\n    /** 상품 관련 상태 정의 */\r\n    this.state = {\r\n      /* 중략 */\r\n      searchQuery: "",\r\n      category: "",\r\n      sort: DEFAULT_SORT,\r\n      pageSize: DEFAULT_LIMIT,\r\n    };\r\n  }\r\n\r\n  /* 중략 */\r\n\r\n  /**\r\n   * URL에서 검색 조건을 읽어와 현재 state와 비교하여 업데이트합니다\r\n   * @returns {boolean} 상태가 변경되었는지 여부\r\n   */\r\n  syncFromUrl() {\r\n    const urlFilters = this.parseFiltersFromUrl();\r\n\r\n    // URL에서 파싱된 조건들을 기본값과 비교하여 최종 필터 생성\r\n    const finalFilters = {\r\n      searchQuery: urlFilters.searchQuery || "",\r\n      category: urlFilters.category || "",\r\n      sort: urlFilters.sort || DEFAULT_SORT,\r\n      pageSize: urlFilters.pageSize || DEFAULT_LIMIT,\r\n    };\r\n\r\n    // 현재 state와 비교하여 변경된 부분만 확인\r\n    const hasChanged = Object.keys(finalFilters).some((key) => this.state[key] !== finalFilters[key]);\r\n\r\n    if (hasChanged) {\r\n      // 변경된 부분만 업데이트 (페이지는 1로 리셋)\r\n      this.setState({\r\n        ...finalFilters,\r\n        currentPage: 1,\r\n      });\r\n      return true;\r\n    }\r\n\r\n    return false;\r\n  }\r\n}\r\n\r\nclass ProductListPage {\r\n  constructor() { /* ... */ }\r\n\r\n  mounted() {\r\n    /* 중략 */\r\n    \r\n    this.initializeFromUrl();\r\n  }\r\n\r\n  /**\r\n   * URL에서 검색 조건을 동기화하고 초기 상품을 로드합니다\r\n   */\r\n  initializeFromUrl() {\r\n    // URL에서 검색 조건을 동기화\r\n    const hasChanged = stateManager.productList.syncFromUrl();\r\n\r\n    // 조건이 변경되지 않은 경우에만 직접 로딩 (변경된 경우 구독에서 자동 로딩됨)\r\n    if (!hasChanged) {\r\n      stateManager.productList.loadProducts();\r\n    }\r\n  }\r\n}\r\n```\r\n\r\n',
  created_at: '2025-07-12T04:09:02Z',
  updated_at: '2025-07-12T05:18:54Z',
  closed_at: null,
  merged_at: null,
  merge_commit_sha: '98313070895a128d1bd4753480beec9888a11eea',
  assignee: null,
  assignees: [],
  requested_reviewers: [],
  requested_teams: [],
  labels: [],
  milestone: null,
  draft: false,
  commits_url:
    'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/pulls/77/commits',
  review_comments_url:
    'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/pulls/77/comments',
  review_comment_url:
    'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/pulls/comments{/number}',
  comments_url:
    'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/issues/77/comments',
  statuses_url:
    'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/statuses/d375e10342739b716cb7ddceb62b3485e94645e4',
  head: {
    label: 'jun17183:main',
    ref: 'main',
    sha: 'd375e10342739b716cb7ddceb62b3485e94645e4',
    user: {
      login: 'jun17183',
      id: 64164782,
      node_id: 'MDQ6VXNlcjY0MTY0Nzgy',
      avatar_url: 'https://avatars.githubusercontent.com/u/64164782?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/jun17183',
      html_url: 'https://github.com/jun17183',
      followers_url: 'https://api.github.com/users/jun17183/followers',
      following_url:
        'https://api.github.com/users/jun17183/following{/other_user}',
      gists_url: 'https://api.github.com/users/jun17183/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/jun17183/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/jun17183/subscriptions',
      organizations_url: 'https://api.github.com/users/jun17183/orgs',
      repos_url: 'https://api.github.com/users/jun17183/repos',
      events_url: 'https://api.github.com/users/jun17183/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/jun17183/received_events',
      type: 'User',
      user_view_type: 'public',
      site_admin: false,
    },
    repo: {
      id: 1014146705,
      node_id: 'R_kgDOPHKmkQ',
      name: 'front_6th_chapter1-1',
      full_name: 'jun17183/front_6th_chapter1-1',
      private: false,
      owner: {
        login: 'jun17183',
        id: 64164782,
        node_id: 'MDQ6VXNlcjY0MTY0Nzgy',
        avatar_url: 'https://avatars.githubusercontent.com/u/64164782?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/jun17183',
        html_url: 'https://github.com/jun17183',
        followers_url: 'https://api.github.com/users/jun17183/followers',
        following_url:
          'https://api.github.com/users/jun17183/following{/other_user}',
        gists_url: 'https://api.github.com/users/jun17183/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/jun17183/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/jun17183/subscriptions',
        organizations_url: 'https://api.github.com/users/jun17183/orgs',
        repos_url: 'https://api.github.com/users/jun17183/repos',
        events_url: 'https://api.github.com/users/jun17183/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/jun17183/received_events',
        type: 'User',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/jun17183/front_6th_chapter1-1',
      description:
        '항해플러스 프론트엔드 6기 > 챕터 1-1 과제: 프레임워크 없이 만드는 SPA with 쇼핑몰',
      fork: true,
      url: 'https://api.github.com/repos/jun17183/front_6th_chapter1-1',
      forks_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/forks',
      keys_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/teams',
      hooks_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/hooks',
      issue_events_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/events',
      assignees_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/tags',
      blobs_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/languages',
      stargazers_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/stargazers',
      contributors_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/contributors',
      subscribers_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/subscribers',
      subscription_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/subscription',
      commits_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/merges',
      archive_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/downloads',
      issues_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/labels{/name}',
      releases_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/jun17183/front_6th_chapter1-1/deployments',
      created_at: '2025-07-05T06:23:42Z',
      updated_at: '2025-07-11T10:54:03Z',
      pushed_at: '2025-07-11T10:54:00Z',
      git_url: 'git://github.com/jun17183/front_6th_chapter1-1.git',
      ssh_url: 'git@github.com:jun17183/front_6th_chapter1-1.git',
      clone_url: 'https://github.com/jun17183/front_6th_chapter1-1.git',
      svn_url: 'https://github.com/jun17183/front_6th_chapter1-1',
      homepage: null,
      size: 148,
      stargazers_count: 0,
      watchers_count: 0,
      language: 'JavaScript',
      has_issues: false,
      has_projects: true,
      has_downloads: true,
      has_wiki: false,
      has_pages: true,
      has_discussions: false,
      forks_count: 0,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 0,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: 'main',
    },
  },
  base: {
    label: 'hanghae-plus:main',
    ref: 'main',
    sha: 'ae35e2b2c58872d65f83b05a0dcb79a78d6da9b1',
    user: {
      login: 'hanghae-plus',
      id: 144507192,
      node_id: 'O_kgDOCJ0BOA',
      avatar_url: 'https://avatars.githubusercontent.com/u/144507192?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/hanghae-plus',
      html_url: 'https://github.com/hanghae-plus',
      followers_url: 'https://api.github.com/users/hanghae-plus/followers',
      following_url:
        'https://api.github.com/users/hanghae-plus/following{/other_user}',
      gists_url: 'https://api.github.com/users/hanghae-plus/gists{/gist_id}',
      starred_url:
        'https://api.github.com/users/hanghae-plus/starred{/owner}{/repo}',
      subscriptions_url:
        'https://api.github.com/users/hanghae-plus/subscriptions',
      organizations_url: 'https://api.github.com/users/hanghae-plus/orgs',
      repos_url: 'https://api.github.com/users/hanghae-plus/repos',
      events_url: 'https://api.github.com/users/hanghae-plus/events{/privacy}',
      received_events_url:
        'https://api.github.com/users/hanghae-plus/received_events',
      type: 'Organization',
      user_view_type: 'public',
      site_admin: false,
    },
    repo: {
      id: 1006049299,
      node_id: 'R_kgDOO_cYEw',
      name: 'front_6th_chapter1-1',
      full_name: 'hanghae-plus/front_6th_chapter1-1',
      private: false,
      owner: {
        login: 'hanghae-plus',
        id: 144507192,
        node_id: 'O_kgDOCJ0BOA',
        avatar_url: 'https://avatars.githubusercontent.com/u/144507192?v=4',
        gravatar_id: '',
        url: 'https://api.github.com/users/hanghae-plus',
        html_url: 'https://github.com/hanghae-plus',
        followers_url: 'https://api.github.com/users/hanghae-plus/followers',
        following_url:
          'https://api.github.com/users/hanghae-plus/following{/other_user}',
        gists_url: 'https://api.github.com/users/hanghae-plus/gists{/gist_id}',
        starred_url:
          'https://api.github.com/users/hanghae-plus/starred{/owner}{/repo}',
        subscriptions_url:
          'https://api.github.com/users/hanghae-plus/subscriptions',
        organizations_url: 'https://api.github.com/users/hanghae-plus/orgs',
        repos_url: 'https://api.github.com/users/hanghae-plus/repos',
        events_url:
          'https://api.github.com/users/hanghae-plus/events{/privacy}',
        received_events_url:
          'https://api.github.com/users/hanghae-plus/received_events',
        type: 'Organization',
        user_view_type: 'public',
        site_admin: false,
      },
      html_url: 'https://github.com/hanghae-plus/front_6th_chapter1-1',
      description:
        '항해플러스 프론트엔드 6기 > 챕터 1-1 과제: 프레임워크 없이 만드는 SPA with 쇼핑몰',
      fork: false,
      url: 'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1',
      forks_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/forks',
      keys_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/keys{/key_id}',
      collaborators_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/collaborators{/collaborator}',
      teams_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/teams',
      hooks_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/hooks',
      issue_events_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/issues/events{/number}',
      events_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/events',
      assignees_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/assignees{/user}',
      branches_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/branches{/branch}',
      tags_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/tags',
      blobs_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/git/blobs{/sha}',
      git_tags_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/git/tags{/sha}',
      git_refs_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/git/refs{/sha}',
      trees_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/git/trees{/sha}',
      statuses_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/statuses/{sha}',
      languages_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/languages',
      stargazers_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/stargazers',
      contributors_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/contributors',
      subscribers_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/subscribers',
      subscription_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/subscription',
      commits_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/commits{/sha}',
      git_commits_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/git/commits{/sha}',
      comments_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/comments{/number}',
      issue_comment_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/issues/comments{/number}',
      contents_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/contents/{+path}',
      compare_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/compare/{base}...{head}',
      merges_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/merges',
      archive_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/{archive_format}{/ref}',
      downloads_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/downloads',
      issues_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/issues{/number}',
      pulls_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/pulls{/number}',
      milestones_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/milestones{/number}',
      notifications_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/notifications{?since,all,participating}',
      labels_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/labels{/name}',
      releases_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/releases{/id}',
      deployments_url:
        'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/deployments',
      created_at: '2025-06-21T11:29:40Z',
      updated_at: '2025-07-15T14:52:32Z',
      pushed_at: '2025-07-12T02:54:15Z',
      git_url: 'git://github.com/hanghae-plus/front_6th_chapter1-1.git',
      ssh_url: 'git@github.com:hanghae-plus/front_6th_chapter1-1.git',
      clone_url: 'https://github.com/hanghae-plus/front_6th_chapter1-1.git',
      svn_url: 'https://github.com/hanghae-plus/front_6th_chapter1-1',
      homepage: 'https://hanghae-plus.github.io/front_6th_chapter1-1/',
      size: 432,
      stargazers_count: 4,
      watchers_count: 4,
      language: 'JavaScript',
      has_issues: true,
      has_projects: true,
      has_downloads: true,
      has_wiki: false,
      has_pages: true,
      has_discussions: false,
      forks_count: 67,
      mirror_url: null,
      archived: false,
      disabled: false,
      open_issues_count: 61,
      license: null,
      allow_forking: true,
      is_template: false,
      web_commit_signoff_required: false,
      topics: [],
      visibility: 'public',
      forks: 67,
      open_issues: 61,
      watchers: 4,
      default_branch: 'main',
    },
  },
  _links: {
    self: {
      href: 'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/pulls/77',
    },
    html: {
      href: 'https://github.com/hanghae-plus/front_6th_chapter1-1/pull/77',
    },
    issue: {
      href: 'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/issues/77',
    },
    comments: {
      href: 'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/issues/77/comments',
    },
    review_comments: {
      href: 'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/pulls/77/comments',
    },
    review_comment: {
      href: 'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/pulls/comments{/number}',
    },
    commits: {
      href: 'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/pulls/77/commits',
    },
    statuses: {
      href: 'https://api.github.com/repos/hanghae-plus/front_6th_chapter1-1/statuses/d375e10342739b716cb7ddceb62b3485e94645e4',
    },
  },
  author_association: 'NONE',
  auto_merge: null,
  active_lock_reason: null,
};
