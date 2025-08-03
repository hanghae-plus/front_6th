import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchAssignmentById } from "../service";

export const useAssignmentById = (id: string) => {
  return useSuspenseQuery({
    queryKey: ["assignment-detail", id],
    queryFn: () => fetchAssignmentById(Number(id)),
  });
};
