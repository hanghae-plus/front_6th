import { queryClient } from "@/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home, User } from "@/pages";
import { BASE_URL } from "@/constants";
import { withBaseLayout } from "@/components";

const Index = withBaseLayout(() => <Home />);
const StudentsPage = withBaseLayout(() => <div className="p-6">수강생 목록 페이지</div>);
const StudentDetailPage = withBaseLayout(() => <div className="p-6">수강생 상세 페이지</div>);
const AssignmentsPage = withBaseLayout(() => <div className="p-6">과제 목록 페이지</div>);
const NotFound = withBaseLayout(() => <div className="p-6">404 - 페이지를 찾을 수 없습니다</div>);

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={BASE_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/students" element={<StudentsPage />} />
          <Route path="/students/:id" element={<StudentDetailPage />} />
          <Route path="/assignments" element={<AssignmentsPage />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
