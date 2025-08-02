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
} from "@/components/ui/Sidebar";
import { Users, BookOpen } from "lucide-react";

const navigationItems = [
  {
    title: "수강생 목록",
    url: "/students",
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

  const isActive = (path: string) => {
    if (path === "/students") {
      return currentPath === "/students" || currentPath.startsWith("/students/");
    }
    return currentPath === path;
  };

  const getNavCls = (path: string) =>
    isActive(path)
      ? "bg-primary text-primary-foreground shadow-glow font-medium"
      : "text-foreground hover:bg-secondary hover:text-secondary-foreground";

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"}>
      <SidebarContent className="bg-card border-r border-border">
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-6">
            {!collapsed && (
              <>
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">항</span>
                </div>
                <h1 className="text-lg font-bold text-primary">항해99 플러스</h1>
              </>
            )}
          </div>
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className="text-muted-foreground px-4">{!collapsed && "학습 관리"}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="px-2">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="h-12">
                    <NavLink to={item.url} className={`${getNavCls(item.url)} rounded-lg transition-all duration-300`}>
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
