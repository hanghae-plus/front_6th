import type { GithubPullRequest } from "@hanghae-plus/domain";

export type Assignment = Pick<GithubPullRequest, "user" | "url" | "title" | "body">;
