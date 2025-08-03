import "./assets/index.css";
import { hydrateRoot } from "react-dom/client";
import { App } from "./App.tsx";
import { fetchUsersWithAssignments } from "@/features";

const $root = document.getElementById("root")!;
async function main() {
  const initData = await fetchUsersWithAssignments();
  hydrateRoot($root, <App initData={initData} />);
}

main();
