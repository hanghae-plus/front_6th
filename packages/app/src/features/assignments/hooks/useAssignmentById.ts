import { type Assignment } from "@/providers";
import { useUserWithAssignments } from "@/features";

export const useAssignmentById = (id: string, assignmentId: string) => {
  const { assignments } = useUserWithAssignments(id);
  const assignment: Assignment = assignments[assignmentId];
  return assignment;
};
