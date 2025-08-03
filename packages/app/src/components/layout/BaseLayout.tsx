import type { PropsWithChildren } from "react";
import { SidebarProvider, SidebarTrigger } from "../ui";
import { AppSidebar } from "./AppSidebar";
import { usePageTitle } from "@/providers";

export function BaseLayout({ children }: PropsWithChildren) {
  const title = usePageTitle();
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1">
          <header className="h-12 flex items-center border-b border-border bg-card px-4">
            <SidebarTrigger className="mr-4 text-white" />
            <h4 className="text-lg font-semibold ">{title}</h4>
          </header>
          <main className="p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
