import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchAllAssignments } from "../service";

export const useAllAssignments = () => {
  return useSuspenseQuery({
    queryKey: ["assignments"],
    queryFn: fetchAllAssignments,
  });
};
