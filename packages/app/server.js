import fs from "fs";
import path from "path";

const env = process.env.NODE_ENV || "development";
const base = "/front_6th";
const template = fs.readFileSync(env === "production" ? "./dist/client/index.html" : "./index.html", "utf-8");

async function generate() {
  const url = "/";

  try {
    // 개발 모드에서는 transformIndexHtml 사용
    const fullUrl = path.join(base, url);
    const filePath = path.join("./dist/client", url, "index.html");

    // SSR 모듈 로드
    const { render } = await import("./dist/server/main-server.js");

    const rendered = await render(fullUrl);

    const html = template
      .replace(`<!--app-head-->`, rendered.head ?? "")
      .replace(`<!--app-html-->`, rendered.html ?? "");

    fs.writeFileSync(filePath, html, "utf-8");
  } catch (error) {
    console.error("❌ 생성 중 오류 발생:", error);
  }
}

generate();
