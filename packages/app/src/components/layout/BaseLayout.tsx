import type { PropsWithChildren } from "react";
import { SidebarProvider, SidebarTrigger } from "../ui";
import { AppSidebar } from "./AppSidebar";

export function BaseLayout({
  children,
  title = "항해플러스 6기 프론트엔드 수강생 커뮤니티",
}: PropsWithChildren<{ title?: string }>) {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1">
          <header className="h-12 flex items-center border-b border-border bg-card px-4">
            <SidebarTrigger className="mr-4 text-white" />
            <h1 className="text-lg font-semibold text-primary">{title}</h1>
          </header>
          <main className="p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
