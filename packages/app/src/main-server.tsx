import { renderToString } from "react-dom/server";
import { App } from "./App";

export async function render(url: string) {
  const html = renderToString(<App url={url} ssr />);

  return { html };
}
