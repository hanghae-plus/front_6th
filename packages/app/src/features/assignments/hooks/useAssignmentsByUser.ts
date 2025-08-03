import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchAssignmentsByUser } from "../service";
import { useAppDataContext } from "@/providers";

export const useAssignmentsByUser = (userId: string) => {
  const appData = useAppDataContext();
  return useSuspenseQuery({
    queryKey: ["assignments", userId],
    queryFn: () => fetchAssignmentsByUser(userId),
    initialData: appData[userId].assignments,
  });
};
