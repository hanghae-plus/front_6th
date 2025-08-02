import type { ComponentProps, PropsWithChildren } from "react";
import { AppSidebar, SidebarProvider, SidebarTrigger } from "../";

export function BaseLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1">
          <header className="h-12 flex items-center border-b border-border bg-card px-4">
            <SidebarTrigger className="mr-4 text-white" />
            <h1 className="text-lg font-semibold text-primary">항해플러스 6기 프론트엔드 수강생 커뮤니티</h1>
          </header>
          <main className="p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function withBaseLayout<T extends (...args: any[]) => any>(Component: T) {
  return function WrappedComponent(props: ComponentProps<T>) {
    return (
      <BaseLayout>
        <Component {...props} />
      </BaseLayout>
    );
  };
}
