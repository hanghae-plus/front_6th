import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GithubService } from './github/github.service';
import * as fs from 'fs';
import * as path from 'path';
import { INestApplication } from '@nestjs/common';

const organization = 'hanghae-plus';
const repos = [
  'front_6th_chapter1-1',
  'front_6th_chapter1-2',
  'front_6th_chapter1-3',
];
const createApp = (() => {
  let app: INestApplication | null = null;
  return async (): Promise<INestApplication> => {
    if (app === null) {
      app = await NestFactory.create(AppModule);
    }
    return app;
  };
})();

const generatePulls = async (app: Awaited<ReturnType<typeof createApp>>) => {
  const filteredRepos = repos.filter(
    (repo) =>
      !fs.existsSync(path.join(__dirname, '../data', `${repo}/pulls.json`)),
  );
  const githubService = app.get(GithubService);

  const results = await Promise.all(
    filteredRepos.map((repo) =>
      githubService.getPulls(`${organization}/${repo}`),
    ),
  );

  results.forEach((result, index) => {
    const repo = filteredRepos[index];
    const dirname = path.join(__dirname, '../data', repo);
    const filename = path.join(dirname, `/pulls.json`);
    if (!fs.existsSync(dirname)) {
      fs.mkdirSync(dirname);
    }
    fs.writeFileSync(filename, JSON.stringify(result, null, 2), 'utf-8');

    console.log(`${repo} Counts: `, result.length);
  });
};

const main = () => {
  createApp().then((app) => {
    generatePulls(app);
  });
};

main();
