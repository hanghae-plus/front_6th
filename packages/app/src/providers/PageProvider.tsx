import { createContext, type PropsWithChildren, type ReactNode, useContext } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface Props<T = any> {
  title: string | ReactNode;
  data: T;
}

const PageContext = createContext<Props>({
  title: "항해플러스 프론트엔드 6기",
  data: null,
});

export function usePageContext<T>() {
  const context = useContext(PageContext);
  return context as Props<T>;
}

export function usePageData<T>() {
  const pageContext = usePageContext<T>();
  return pageContext.data;
}

export function usePageTitle<T>() {
  const pageContext = usePageContext<T>();
  return pageContext.title;
}

export function PageProvider<T>({ children, ...props }: PropsWithChildren<Props<T>>) {
  return <PageContext value={props}>{children}</PageContext>;
}
