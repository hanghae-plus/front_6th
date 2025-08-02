import { queryClient } from "@/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home, User } from "@/pages";
import { BASE_URL } from "@/constants";
import { withBaseLayout } from "@/components";

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename={BASE_URL}>
        <Routes>
          <Route path="/" Component={withBaseLayout(Home)} />
          <Route path="/user/:id" Component={withBaseLayout(User)} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};
