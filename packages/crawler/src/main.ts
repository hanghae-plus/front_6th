import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GithubService } from './github/github.service';
import * as fs from 'fs';
import * as path from 'path';
import { INestApplication } from '@nestjs/common';
import { GithubPullRequest } from '@hanghae-plus/domain';

const organization = 'hanghae-plus';
const repos = [
  'front_6th_chapter1-1',
  'front_6th_chapter1-2',
  'front_6th_chapter1-3',
  'front_6th_chapter2-1',
];
const dataDir = path.join(__dirname, '../../../docs/data');
const createApp = (() => {
  let app: INestApplication | null = null;
  return async (): Promise<INestApplication> => {
    if (app === null) {
      app = await NestFactory.create(AppModule);
    }
    return app;
  };
})();

type App = Awaited<ReturnType<typeof createApp>>;

const generatePulls = async (app: App) => {
  const filteredRepos = repos.filter(
    (repo) => !fs.existsSync(path.join(dataDir, `${repo}/pulls.json`)),
  );
  const githubService = app.get(GithubService);

  const results = await Promise.all(
    filteredRepos.map((repo) =>
      githubService.getPulls(`${organization}/${repo}`),
    ),
  );

  results.forEach((result, index) => {
    const repo = filteredRepos[index];
    const dirname = path.join(dataDir, repo);
    const filename = path.join(dirname, `/pulls.json`);
    if (!fs.existsSync(dirname)) {
      fs.mkdirSync(dirname);
    }
    fs.writeFileSync(filename, JSON.stringify(result, null, 2), 'utf-8');

    console.log(`${repo} Counts: `, result.length);
  });
};

const generateUsers = (app: App) => {
  const filename = path.join(dataDir, 'users.json');
  const githubService = app.get(GithubService);

  const pulls = repos.map(
    (repo) =>
      JSON.parse(
        fs.readFileSync(path.join(dataDir, `${repo}/pulls.json`), 'utf-8'),
      ) as GithubPullRequest,
  );

  const users = pulls
    .flat()
    .map((v) => githubService.getUser(v))
    .reduce((acc, user) => ({ ...acc, [user.id]: user }), {});

  fs.writeFileSync(filename, JSON.stringify(users, null, 2), 'utf-8');
};

const main = async () => {
  const app = await createApp();
  await generatePulls(app);
  generateUsers(app);
};

main();
