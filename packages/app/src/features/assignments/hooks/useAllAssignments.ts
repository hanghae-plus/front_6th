import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchAllAssignments } from "../service";
import { useAppDataContext } from "@/providers";

export const useAllAssignments = () => {
  const appData = useAppDataContext();
  return useSuspenseQuery({
    queryKey: ["assignments"],
    queryFn: fetchAllAssignments,
    initialData: Object.values(appData).flatMap((user) => user.assignments),
  });
};
