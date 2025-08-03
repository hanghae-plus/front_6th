import fs from "fs";
import path from "path";

import chapter1_1 from "../../docs/data/front_6th_chapter1-1/pulls.json" with { type: "json" };
import chapter1_2 from "../../docs/data/front_6th_chapter1-2/pulls.json" with { type: "json" };
import chapter1_3 from "../../docs/data/front_6th_chapter1-3/pulls.json" with { type: "json" };
import chapter2_1 from "../../docs/data/front_6th_chapter2-1/pulls.json" with { type: "json" };

const env = process.env.NODE_ENV || "development";
const base = "/front_6th";
const template = fs.readFileSync(env === "production" ? "./dist/client/template.html" : "./index.html", "utf-8");

const getUrls = async () => {
  const pulls = [...chapter1_1, ...chapter1_2, ...chapter1_3, ...chapter2_1];

  const userIdWithAssignmentIds = pulls.reduce((acc, pull) => {
    const userId = pull.user.login;
    const assignmentIds = acc[userId] || [];
    return {
      ...acc,
      [userId]: [...assignmentIds, pull.id],
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
