import { useAppDataContext } from "@/providers";

export const useAllAssignments = () => {
  const { data } = useAppDataContext();
  return data.assignmentDetails;
};
