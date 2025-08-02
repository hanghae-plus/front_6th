import "./index.css";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/client";

const $root = document.getElementById("root")!;
createRoot($root).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>,
);
