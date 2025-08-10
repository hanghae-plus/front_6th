import fs from "fs";
import path from "path";

import appData from "../../docs/data/app-data.json" with { type: "json" };

const env = process.env.NODE_ENV || "development";
const base = "/front_6th";
const template = fs.readFileSync(env === "production" ? "./dist/client/template.html" : "./index.html", "utf-8");

const getUrls = async () => {
  const { users } = appData;

  const userIdWithAssignmentIds = Object.entries(users).reduce((acc, [userId, user]) => {
    const pullIds = new Set(user.assignments.map((v) => appData.assignmentDetails[v.url].id));
    return {
      ...acc,
      [userId]: [...pullIds],
    };
  }, {});

  return [
    "/",
    ...Object.keys(userIdWithAssignmentIds).flatMap((userId) => [
      `/@${userId}/`,
      ...userIdWithAssignmentIds[userId].map((id) => `/@${userId}/assignment/${id}/`),
    ]),
  ];
};

async function generate(url) {
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

    const dirPath = path.join("./dist/client", url);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }

    fs.writeFileSync(filePath, html, "utf-8");
  } catch (error) {
    console.error("❌ 생성 중 오류 발생:", error);
  }
}

getUrls().then((urls) => urls.forEach(generate));
