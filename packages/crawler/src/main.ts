import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GithubService } from './github/github.service';
import * as fs from 'fs';
import * as path from 'path';
import { INestApplication } from '@nestjs/common';
import {
  AssignmentDetail,
  AssignmentResult,
  CommonAssignment,
  GithubPullRequest,
  UserWIthCommonAssignments,
} from '@hanghae-plus/domain';
import { HanghaeService } from './hanghae/hanghae.service';
import { omit } from 'es-toolkit/compat';

const organization = 'hanghae-plus';
const repos = [
  'front_6th_chapter1-1',
  'front_6th_chapter1-2',
  'front_6th_chapter1-3',
  'front_6th_chapter2-1',
  'front_6th_chapter2-2',
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

const generateUserAssignmentInfos = async (app: App) => {
  const filename = path.join(dataDir, 'user-assignment-infos.json');
  const hanghaeService = app.get(HanghaeService);

  const assignments = await hanghaeService.getAssignmentResults();

  fs.writeFileSync(filename, JSON.stringify(assignments, null, 2), 'utf-8');
};

const createUserWithCommonAssignments = (
  pull: GithubPullRequest,
  info: AssignmentResult,
): UserWIthCommonAssignments => ({
  name: info.name,
  github: {
    id: pull.user.login,
    image: pull.user.avatar_url,
    link: pull.user.html_url,
  },
  assignments: [],
});

const generateAppData = () => {
  const assignmentInfos = JSON.parse(
    fs.readFileSync(path.join(dataDir, 'user-assignment-infos.json'), 'utf-8'),
  ) as AssignmentResult[];

  const pulls = repos
    .flatMap(
      (repo) =>
        JSON.parse(
          fs.readFileSync(path.join(dataDir, `${repo}/pulls.json`), 'utf-8'),
        ) as GithubPullRequest,
    )
    .reduce(
      (acc, pull) => ({
        ...acc,
        [pull.html_url]: pull,
      }),
      {} as Record<string, GithubPullRequest>,
    );

  const assignmentDetails = Object.values(pulls).reduce(
    (acc, pull) => ({
      ...acc,
      [pull.html_url]: {
        id: pull.id,
        user: pull.user.id,
        title: pull.title,
        body: pull.body,
        createdAt: new Date(pull.created_at),
        updatedAt: new Date(pull.updated_at),
        url: pull.html_url,
      },
    }),
    {} as Record<string, AssignmentDetail>,
  );

  const feedbacks = assignmentInfos.reduce(
    (acc, { assignment, feedback }) => ({
      ...acc,
      ...(assignment.url && feedback && { [assignment.url]: feedback }),
    }),
    {} as Record<string, { name: string; feedback: string }>,
  );

  const userWithCommonAssignments = assignmentInfos.reduce(
    (acc, info) => {
      const pull = pulls[info.assignment.url];
      if (!pull) {
        return acc;
      }
      const value: UserWIthCommonAssignments =
        acc[pull.user.login] ?? createUserWithCommonAssignments(pull, info);

      value.assignments.push({
        ...omit(info, ['name', 'feedback', 'assignment']),
        url: info.assignment.url,
      });

      return {
        ...acc,
        [value.github.id]: value,
      };
    },
    {} as Record<string, UserWIthCommonAssignments>,
  );

  fs.writeFileSync(
    path.join(dataDir, 'app-data.json'),
    JSON.stringify(
      {
        users: userWithCommonAssignments,
        feedbacks,
        assignmentDetails,
      },
      null,
      2,
    ),
    'utf-8',
  );
};

const main = async () => {
  const app = await createApp();
  await generatePulls(app);
  generateUsers(app);
  await generateUserAssignmentInfos(app);
  generateAppData();
};

main();
