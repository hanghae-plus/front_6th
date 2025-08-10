import { type Assignment } from "@/providers";
import { omit } from "es-toolkit/compat";
import { useUsers } from "../../users";
import { useAllAssignments } from "./useAllAssignments";

export const useUserWithAssignments = (userId: string) => {
  const users = useUsers();
  const assignmentDetails = useAllAssignments();
  return {
    ...users[userId],
    assignments: users[userId].assignments.reduce(
      (acc, v) => {
        const pull = assignmentDetails[v.url];
        if (acc[pull.id]) {
          return acc;
        }
        return { ...acc, [pull.id]: { ...pull, ...omit(v, ["url"]) } };
      },
      {} as Record<string, Assignment>,
    ),
  };
};
