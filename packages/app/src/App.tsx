import { queryClient } from "@/clients";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, StaticRouter } from "react-router";
import * as Pages from "@/pages";
import { BASE_URL } from "@/constants";
import { withBaseLayout } from "@/components";
import { AppDataProvider } from "@/providers";

interface Props {
  url?: string;
  ssr?: boolean;
}

const Home = withBaseLayout(Pages.Home);
const User = withBaseLayout(Pages.User);
const Assignments = withBaseLayout(() => <div className="p-6">전체 과제 목록입니다</div>);
const NotFound = withBaseLayout(() => <div className="p-6">404 - 페이지를 찾을 수 없습니다</div>);
const AssignmentDetail = withBaseLayout(Pages.AssignmentDetail);

export const App = ({ url = "", ssr = false }: Props) => {
  const Router = ssr ? StaticRouter : BrowserRouter;
  return (
    <AppDataProvider>
      <QueryClientProvider client={queryClient}>
        <Router location={url} basename={BASE_URL}>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/assignments/" Component={Assignments} />
            <Route path="/:id/" Component={User} />
            <Route path="/:id/assignment/:assignmentId/" Component={AssignmentDetail} />
            <Route path="*" Component={NotFound} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </AppDataProvider>
  );
};
