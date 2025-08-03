import { createContext, type PropsWithChildren, useContext } from "react";
import type { GithubUser } from "@hanghae-plus/domain";
import type { Assignment } from "@/features";

export type UsersWithAssignments = Record<string, GithubUser & { assignments: Assignment[] }>;

const AppDataContext = createContext<UsersWithAssignments>({});

export function useAppDataContext() {
  return useContext(AppDataContext);
}

export function AppDataProvider({ children, data }: PropsWithChildren<{ data: UsersWithAssignments }>) {
  return <AppDataContext value={data}>{children}</AppDataContext>;
}
