import { renderToString } from "react-dom/server";
import { App } from "./App";

// 메타데이터 함수들을 페이지 컴포넌트에서 가져와서 re-export
export { generateHomeMetadata } from "./pages/home/Home";
export { generateAssignmentsMetadata } from "./pages/assignments/Assignments";
export { generateUserMetadata } from "./pages/user/User";
export { generateAssignmentDetailMetadata } from "./pages/assignment/detail/AssignmentDetail";

export async function render(url: string) {
  const html = renderToString(<App url={url} ssr />);

  return { html };
}
