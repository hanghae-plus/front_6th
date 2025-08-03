import { NavLink, useLocation } from "react-router";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "../ui";
import { BookOpen, Users } from "lucide-react";
import { cn } from "@/lib";

const navigationItems = [
  {
    title: "수강생 목록",
    url: "/",
    icon: Users,
  },
  {
    title: "과제 목록",
    url: "/assignments",
    icon: BookOpen,
  },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const collapsed = state === "collapsed";

  const isActive = (path: string) => currentPath === path;

  const getActiveClassName = (path: string) =>
    isActive(path)
      ? "bg-primary text-primary-foreground shadow-glow font-medium"
      : "text-foreground hover:bg-secondary hover:text-secondary-foreground";

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"}>
      <SidebarContent className="bg-card border-r border-border">
        <NavLink to="/" className="p-4">
          <div className="flex items-center space-x-2 mb-6">
            {!collapsed && (
              <>
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">6기</span>
                </div>
                <h4 className="text-lg font-bold text-primary">항해플러스 프론트엔드</h4>
              </>
            )}
          </div>
        </NavLink>

        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground px-4">{!collapsed && "학습 관리"}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="px-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-12">
                    <NavLink
                      to={item.url}
                      className={cn(getActiveClassName(item.url), "rounded-lg transition-all duration-300")}
                    >
                      <item.icon className="h-5 w-5" />
                      {!collapsed && <span className="ml-3">{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
