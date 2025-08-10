import "./assets/index.css";
import { hydrateRoot } from "react-dom/client";
import { App } from "./App.tsx";

const $root = document.getElementById("root")!;
function main() {
  hydrateRoot($root, <App />);
}

main();
