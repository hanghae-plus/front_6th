import { type Assignment, PageProvider, usePageData } from "@/providers";
import { type PropsWithChildren, useEffect, useRef } from "react";
import { Link, useParams } from "react-router";
import { useAssignmentById, useUserIdByParam } from "@/features";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { IconGithub } from "@/assets";
import { Card } from "@/components";
import { useFeedback } from "@/features/feedbacks";

const AssignmentDetailProvider = ({ children }: PropsWithChildren) => {
  const { assignmentId = "" } = useParams<{ assignmentId: string }>();
  const userId = useUserIdByParam();
  const assignment = useAssignmentById(userId, assignmentId);

  const title = assignment ? (
    <>
      <Link to={`/@${assignment.user}/`}>{assignment.user} 님의 상세페이지</Link> ＞ {assignment.title}
    </>
  ) : (
    "과제 상세페이지"
  );

  return (
    <PageProvider title={title} data={assignment}>
      {children}
    </PageProvider>
  );
};

export const AssignmentDetail = Object.assign(
  () => {
    const data = usePageData<Assignment>();
    const feedback = useFeedback(data.url);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const $el = ref.current;
      if (!$el) {
        return undefined;
      }

      const $script = document.createElement("script");
      $script.setAttribute("issue-term", "pathname");
      $script.setAttribute("theme", "github-dark");
      $script.setAttribute("repo", `hanghae-plus/front_6th`);
      $script.type = "text/javascript";
      $script.async = true;
      $script.crossOrigin = "anonymous";
      $script.src = "https://utteranc.es/client.js";
      $el.appendChild($script);
    }, []);

    return (
      <div ref={ref}>
        <div className="card-wrap">
          <Card className="mb-6 p-6 border border-gray-700 bg-gray-800 rounded-lg">
            <a href={data.url} target="_blank">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <IconGithub fill="white" className="w-8 h-8" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold text-white truncate">{data.title}</h3>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>by {data.user}</span>
                    <span>{new Date(data.createdAt).toLocaleDateString("ko-KR")}</span>
                  </div>
                </div>
              </div>
            </a>
          </Card>
        </div>

        <div className="overflow-auto">
          <MarkdownPreview
            source={data.body}
            className="p-6 max-w-full"
            wrapperElement={{
              "data-color-mode": "dark",
            }}
            style={{
              wordWrap: "break-word",
              overflowWrap: "break-word",
            }}
          />
        </div>

        <div className="overflow-auto mt-9">
          <h3 className="text-2xl mb-3">과제 피드백</h3>
          <MarkdownPreview
            source={feedback}
            className="p-6 max-w-full"
            wrapperElement={{
              "data-color-mode": "dark",
            }}
            style={{
              wordWrap: "break-word",
              overflowWrap: "break-word",
            }}
          />
        </div>

        {/* TODO: Feedback Design 추가 */}
      </div>
    );
  },
  {
    Provider: AssignmentDetailProvider,
  },
);
