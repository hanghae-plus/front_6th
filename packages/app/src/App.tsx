import { queryClient } from "@/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router";
import * as Pages from "@/pages";
import { BASE_URL } from "@/constants";
import { withBaseLayout } from "@/components";

const Home = withBaseLayout("수강생 목록", Pages.Home);
const User = withBaseLayout("수강생 상세페이지", Pages.User);
const Assignments = withBaseLayout("과제 목록", () => <div className="p-6">전체 과제 목록입니다</div>);
const NotFound = withBaseLayout("404 NotFound", () => <div className="p-6">404 - 페이지를 찾을 수 없습니다</div>);

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={BASE_URL}>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/assignments" Component={Assignments} />
          <Route path="/:id" Component={User} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
