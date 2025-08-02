import type { GithubUser } from "@hanghae-plus/domain";
import { useSuspenseQuery } from "@tanstack/react-query";
import { useMemo } from "react";

const fetchUsers = async (): Promise<Record<string, GithubUser>> => {
  const { default: users } = await import("../../../../../../docs/data/users.json");

  return users;
};

const queryKey = ["users"];

export const useUsers = () => {
  const users = useSuspenseQuery({
    queryKey,
    queryFn: fetchUsers,
  });

  const items = useMemo(() => Object.values(users.data ?? {}), [users.data]);

  return { ...users, items };
};
