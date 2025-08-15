import { type ComponentProps, useEffect, useRef } from "react";

export const AssignmentComment = (props: ComponentProps<"div">) => {
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

  return <div ref={ref} {...props} />;
};
