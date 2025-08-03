import "./assets/index.css";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";

const $root = document.getElementById("root")!;
createRoot($root).render(<App />);
