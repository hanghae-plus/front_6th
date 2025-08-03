import type { GithubUser } from "@hanghae-plus/domain";

export const fetchUsers = async (): Promise<Record<string, GithubUser>> => {
  const { default: users } = await import("../../../../../docs/data/users.json");

  return users;
};
