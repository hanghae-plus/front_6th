import { type PropsWithChildren } from "react";
import { AssignmentCard, AssignmentStats, useAssignmentSummaries } from "@/features";
import { PageProvider, usePageData } from "@/providers";

const AssignmentsProvider = ({ children }: PropsWithChildren) => {
  const data = useAssignmentSummaries();
  return (
    <PageProvider title="전체 과제 목록 " data={data}>
      {children}
    </PageProvider>
  );
};

export const Assignments = () => {
  const { summaries, stats } = usePageData<ReturnType<typeof useAssignmentSummaries>>();

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold text-gray-100">과제 목록</h1>
        <p className="text-gray-400">전체 과제 현황과 각 과제별 제출 통계를 확인하세요.</p>
      </div>

      <AssignmentStats {...stats} />

      <div className="flex flex-col gap-6">
        {summaries.map((assignment) => (
          <AssignmentCard key={assignment.id || assignment.title} {...assignment} />
        ))}
      </div>
    </div>
  );
};

Object.assign(Assignments, {
  Provider: AssignmentsProvider,
});
