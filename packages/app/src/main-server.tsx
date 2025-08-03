import { renderToString } from "react-dom/server";
import { App } from "./App";
import { fetchUsersWithAssignments } from "@/features";

export async function render(url: string) {
  const initData = await fetchUsersWithAssignments();

  const html = renderToString(<App url={url} initData={initData} ssr />);

  return { html, initData };
}
