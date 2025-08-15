import type { CommonAssignment } from "@hanghae-plus/domain";

export const mergeAssignments = (assignments: CommonAssignment[]) => {
  const prSet = assignments.reduce(
    (acc, current) => {
      const prev = acc[current.url];
      const assignment = !prev
        ? current
        : {
            url: current.url,
            passed: prev.passed && current.passed,
            theBest: prev.theBest && current.theBest,
          };

      return {
        ...acc,
        [current.url]: assignment,
      };
    },
    {} as Record<string, CommonAssignment>,
  );

  return Object.values(prSet);
};
