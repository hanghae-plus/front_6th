import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchAssignmentsByUser } from "../service";
import { useAppDataContext } from "@/providers";

export const useAssignmentById = (id: string, assignmentId: string) => {
  const appData = useAppDataContext();
  return useSuspenseQuery({
    queryKey: ["assignment-detail", id],
    queryFn: async () => {
      const userWithAssignments = await fetchAssignmentsByUser(id);
      return userWithAssignments.find((v) => v.id === Number(assignmentId));
    },
    initialData: appData[id]?.assignments?.find((v) => v.id === Number(assignmentId)),
  });
};
