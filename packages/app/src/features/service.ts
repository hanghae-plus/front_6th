import type { GithubUser } from "@hanghae-plus/domain";
import { fetchUsers } from "./users";
import { fetchAllAssignments, type Assignment } from "./assignments";

export type UsersWithAssignments = Record<string, GithubUser & { assignments: Assignment[] }>;

export const fetchUsersWithAssignments = async (): Promise<UsersWithAssignments> => {
  const users = await fetchUsers();
  const assignments = await fetchAllAssignments();

  return assignments.reduce((acc, assignment) => {
    const user = acc[assignment.user.login] ?? {
      ...users[assignment.user.login],
      assignments: [],
    };
    user.assignments.push(assignment);
    acc[assignment.user.login] = user;
    return acc;
  }, {} as UsersWithAssignments);
};
