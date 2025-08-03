import { PageProvider, usePageData } from "@/providers";
import type { PropsWithChildren } from "react";
import { useParams } from "react-router";
import { type Assignment, useAssignmentById } from "@/features";
import MarkdownPreview from "@uiw/react-markdown-preview";

const AssignmentDetailProvider = ({ children }: PropsWithChildren) => {
  const { assignmentId = "" } = useParams<{ assignmentId: string }>();
  const { data: assignment } = useAssignmentById(assignmentId);

  return (
    <PageProvider title={assignment?.title ?? "과제 상세페이지"} data={assignment}>
      {children}
    </PageProvider>
  );
};

export const AssignmentDetail = Object.assign(
  () => {
    const data = usePageData<Assignment>();
    return (
      <div className="m-[-24px]">
        <MarkdownPreview
          source={data.body}
          className="p-12"
          wrapperElement={{
            "data-color-mode": "dark",
          }}
        />
      </div>
    );
  },
  {
    Provider: AssignmentDetailProvider,
  },
);
