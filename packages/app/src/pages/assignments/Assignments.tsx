import { type PropsWithChildren } from "react";
import { AssignmentCard, AssignmentStats, useAssignmentSummaries } from "@/features";
import { PageProvider, usePageData } from "@/providers";
import { baseMetadata, type MetadataConfig } from "@/utils/metadata";

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

// Assignments 페이지 메타데이터 생성 함수
export function generateAssignmentsMetadata(): MetadataConfig {
  return {
    ...baseMetadata,
    title: "전체 과제 목록 - 항해플러스 프론트엔드 6기",
    description:
      "항해플러스 프론트엔드 6기의 모든 과제와 제출 통계를 확인하세요. React, TypeScript, JavaScript 실습 과제들의 진행 현황과 수강생들의 성과를 한눈에 살펴보실 수 있습니다.",
    keywords: `${baseMetadata.keywords}, 과제목록, 제출통계, 실습과제, 프로젝트, 코딩과제`,
  };
}

Object.assign(Assignments, {
  Provider: AssignmentsProvider,
  generateMetadata: generateAssignmentsMetadata,
});
