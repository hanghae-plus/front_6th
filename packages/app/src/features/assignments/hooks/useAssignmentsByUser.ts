import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchAssignmentsByUser } from "../service";

export const useAssignmentsByUser = (userId: string) => {
  return useSuspenseQuery({
    queryKey: ["assignments", userId],
    queryFn: () => fetchAssignmentsByUser(userId),
  });
};
