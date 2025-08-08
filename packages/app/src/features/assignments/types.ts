import type { GithubPullRequest } from "@hanghae-plus/domain";

export type Assignment = Pick<GithubPullRequest, "id" | "user" | "title" | "body"> & {
  createdAt: Date;
  updatedAt: Date;
  url: string;
  feedback: string;
  isBest: boolean;
};
