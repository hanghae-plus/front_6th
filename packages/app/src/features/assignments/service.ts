import type { GithubPullRequest } from "@hanghae-plus/domain";
import { pick } from "es-toolkit/compat";
import type { Assignment } from "./types";

const assignments = [
  { label: "Chapter 1-1. 프레임워크 없이 SPA 만들기 (1)", path: "front_6th_chapter1-1" },
  { label: "Chapter 1-2. 프레임워크 없이 SPA 만들기 (2)", path: "front_6th_chapter1-2" },
  { label: "Chapter 1-3. React, Beyond the Basics", path: "front_6th_chapter1-3" },
  { label: "Chapter 2-1. 클린코드와 리팩토링", path: "front_6th_chapter2-1" },
] as const;

type AssignmentPath = (typeof assignments)[number]["path"];

export const fetchAssignments = async (path: AssignmentPath): Promise<Assignment[]> => {
  const { default: data } = await import(`../../../../../docs/data/${path}/pulls.json`);
  return data.map((item: GithubPullRequest) => ({
    ...pick(item, ["id", "user", "title", "body"]),
    url: item.html_url,
    createdAt: new Date(item.created_at),
    updatedAt: new Date(item.updated_at),
  }));
};

export const fetchAllAssignments = async () => {
  const results = await Promise.all(assignments.map(({ path }) => fetchAssignments(path)));
  return results.flat();
};

export const fetchAssignmentsByUser = async (userId: string) => {
  const assignments = await fetchAllAssignments();
  return assignments.filter((assignment) => assignment.user.login === userId);
};

export const fetchAssignmentById = async (id: number) => {
  const assignments = await fetchAllAssignments();
  return assignments.find((assignment) => assignment.id === id);
};
