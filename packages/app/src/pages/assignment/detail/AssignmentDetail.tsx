import { PageProvider, usePageData } from "@/providers";
import { type PropsWithChildren, useEffect, useRef } from "react";
import { Link, useParams } from "react-router";
import { type Assignment, useAssignmentById } from "@/features";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { IconGithub } from "@/assets";
import { Card } from "@/components";

const AssignmentDetailProvider = ({ children }: PropsWithChildren) => {
  const { assignmentId = "" } = useParams<{ assignmentId: string }>();
  const { data: assignment } = useAssignmentById(assignmentId);
  const title = assignment ? (
    <>
      <Link to={`/@${assignment.user.login}`}>{assignment.user.login} 님의 상세페이지</Link> ＞ {assignment.title}
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
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const $el = ref.current;
      if (!$el) {
        return undefined;
      }

      const $script = document.createElement("script");
      $script.setAttribute("issue-term", "pathname");
      $script.setAttribute("theme", "github-light");
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
                    <span className="px-2 py-1 text-xs bg-green-600 text-white rounded-full flex-shrink-0">Open</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span>by {data.user.login}</span>
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
      </div>
    );
  },
  {
    Provider: AssignmentDetailProvider,
  },
);
