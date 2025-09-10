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
    "/assignments/",
    ...Object.keys(userIdWithAssignmentIds).flatMap((userId) => [
      `/@${userId}/`,
      ...userIdWithAssignmentIds[userId].map((id) => `/@${userId}/assignment/${id}/`),
    ]),
  ];
};

async function generateMetadata(url) {
  try {
    // 컴포넌트에서 메타데이터 함수를 가져옴
    const components = await import("./dist/server/main-server.js");

    // URL 패턴별 메타데이터 생성
    const userMatch = url.match(/\/@([^\\/]+)\//);
    const assignmentMatch = url.match(/\/assignment\/([^\\/]+)\//);

    // 홈페이지
    if (url === "/") {
      const { generateHomeMetadata } = components;
      if (generateHomeMetadata) {
        const metadata = generateHomeMetadata();
        return createMetaTags(metadata);
      }
    }

    // 과제 목록 페이지
    if (url === "/assignments/") {
      const { generateAssignmentsMetadata } = components;
      if (generateAssignmentsMetadata) {
        const metadata = generateAssignmentsMetadata();
        return createMetaTags(metadata);
      }
    }

    // 사용자별 페이지
    if (userMatch) {
      const userId = userMatch[1];
      const user = appData.users[userId];

      if (assignmentMatch && user) {
        const assignmentId = assignmentMatch[1];
        const assignment = user.assignments.find(
          (a) => appData.assignmentDetails[a.url]?.id.toString() === assignmentId,
        );

        if (assignment) {
          const assignmentDetail = appData.assignmentDetails[assignment.url];
          const { generateAssignmentDetailMetadata } = components;
          if (generateAssignmentDetailMetadata) {
            const metadata = generateAssignmentDetailMetadata({
              assignmentId,
              assignmentTitle: assignmentDetail.title,
              userName: user.name,
            });
            return createMetaTags(metadata);
          }
        }
      }

      if (user) {
        const { generateUserMetadata } = components;
        if (generateUserMetadata) {
          const metadata = generateUserMetadata({
            userName: user.name,
            avatarUrl: user.github.avatar_url,
          });
          return createMetaTags(metadata);
        }
      }
    }

    // 기본 메타데이터
    const { generateHomeMetadata } = components;
    if (generateHomeMetadata) {
      const metadata = generateHomeMetadata();
      return createMetaTags(metadata);
    }

    // Fallback 메타데이터
    return createMetaTags({
      title: "항해플러스 프론트엔드 6기 기술블로그",
      description: "항해플러스 프론트엔드 6기 수강생들의 과제 및 기술 블로그",
      ogImage: "/defaultThumbnail.jpg",
      keywords: "항해플러스, 프론트엔드, 기술블로그, React, JavaScript",
    });
  } catch (error) {
    console.error("메타데이터 생성 중 오류:", error);
    // 에러 시 기본 메타데이터 반환
    return createMetaTags({
      title: "항해플러스 프론트엔드 6기 기술블로그",
      description: "항해플러스 프론트엔드 6기 수강생들의 과제 및 기술 블로그",
      ogImage: "/defaultThumbnail.jpg",
      keywords: "항해플러스, 프론트엔드, 기술블로그, React, JavaScript",
    });
  }
}

function createMetaTags({ title, description, ogImage, keywords }) {
  return `
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta name="keywords" content="${keywords}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${ogImage}" />
  `;
}

async function generate(url) {
  try {
    // 개발 모드에서는 transformIndexHtml 사용
    const fullUrl = path.join(base, url);
    const filePath = path.join("./dist/client", url, "index.html");

    // SSR 모듈 로드
    const { render } = await import("./dist/server/main-server.js");

    const rendered = await render(fullUrl);

    // URL별 메타데이터 생성
    const metadata = await generateMetadata(url);

    const html = template
      .replace(`<!--app-head-->`, `${metadata}${rendered.head ?? ""}`)
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

async function generateSitemap(urls) {
  const baseUrl = "https://hanghae-plus.github.io/front_6th";
  const lastMod = new Date().toISOString();

  const urlElements = urls
    .map((url) => {
      const fullUrl = url === "/" ? baseUrl : `${baseUrl}${url}`;

      // URL 타입에 따른 priority와 changefreq 설정
      let priority = "0.8";
      let changefreq = "weekly";

      if (url === "/") {
        priority = "1.0";
        changefreq = "daily";
      } else if (url === "/assignments/") {
        priority = "0.9";
        changefreq = "weekly";
      } else if (url.includes("/assignment/")) {
        priority = "0.7";
        changefreq = "monthly";
      } else if (url.match(/\/@[^/]+\/$/)) {
        priority = "0.8";
        changefreq = "weekly";
      }

      return `
  <url>
    <loc>${fullUrl}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlElements}
</urlset>`;

  const sitemapPath = "./dist/client/sitemap.xml";
  fs.writeFileSync(sitemapPath, sitemap, "utf-8");
  console.log("✅ sitemap.xml 생성 완료");
}

async function generateRobotsTxt() {
  const baseUrl = "https://hanghae-plus.github.io/front_6th";

  const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${baseUrl}/sitemap.xml`;

  const robotsPath = "./dist/client/robots.txt";
  fs.writeFileSync(robotsPath, robotsTxt, "utf-8");
  console.log("✅ robots.txt 생성 완료");
}

getUrls().then(async (urls) => {
  urls.forEach(generate);
  await generateSitemap(urls);
  await generateRobotsTxt();
});
