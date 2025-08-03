import type { GithubUser } from "@hanghae-plus/domain";
import { BookOpen, Github, Users } from "lucide-react";
import { type Assignment, useAllAssignments, useUsers } from "@/features";
import { Link } from "react-router";
import { Badge, Card } from "@/components";
import { type PropsWithChildren, Suspense, useMemo } from "react";
import { PageProvider, usePageData } from "@/providers";

const UserCard = ({ id, link, image, assignments }: GithubUser & { assignments: number }) => {
  return (
    <Card className="hover:shadow-glow transition-all duration-300 cursor-pointer animate-fade-in hover:scale-[1.02] group bg-card border border-border">
      <Link to={`/@${id}`} className="block">
        <div className="p-3">
          {/* 프로필 섹션 */}
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="relative">
              <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-orange-500/30 group-hover:ring-orange-400/50 transition-all">
                <img src={image} alt={id} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border border-slate-800"></div>
            </div>

            <div className="w-full">
              <h3 className="text-sm font-semibold text-white group-hover:text-orange-300 transition-colors break-words leading-tight">
                {id}
              </h3>
              <p>
                <span className="text-xs text-slate-400">과제 제출: {assignments}개</span>
              </p>
            </div>

            <Badge
              variant="secondary"
              className="text-xs bg-slate-700 hover:bg-slate-600 cursor-pointer transition-colors px-2 py-1"
              onClick={(e: React.MouseEvent) => {
                e.preventDefault();
                window.open(link, "_blank");
              }}
            >
              <Github className="w-4 h-4" />
            </Badge>
          </div>
        </div>
      </Link>
    </Card>
  );
};

const UsersGrid = ({ users, assignments }: { users: GithubUser[]; assignments: Assignment[] }) => {
  const usersWithAssignments = useMemo(
    () =>
      users.map((user) => {
        const userAssignments = assignments.filter((assignment) => assignment.user.login === user.id);
        return { ...user, assignments: userAssignments };
      }),
    [assignments, users],
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {usersWithAssignments.map(({ assignments, ...user }) => (
        <UserCard key={user.id} {...user} assignments={assignments.length} />
      ))}
    </div>
  );
};

const HomeProvider = ({ children }: PropsWithChildren) => {
  const users = useUsers();
  const assignments = useAllAssignments();

  const contextValue = useMemo(() => ({ users: users.items, assignments: assignments.data }), [users, assignments]);

  return (
    <PageProvider title="수강생 목록" data={contextValue}>
      {children}
    </PageProvider>
  );
};

const HomePage = () => {
  const { users, assignments } = usePageData<{ users: GithubUser[]; assignments: Assignment[] }>();

  return (
    <div className="px-4 py-6">
      {/* 상단 통계 */}
      <div className="mb-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">수강생 명단</h2>
          <Badge variant="secondary" className="text-sm bg-slate-700">
            총 {users.length}명
          </Badge>
        </div>

        {/* 통계 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="p-4 bg-slate-800/50 border-slate-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-orange-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">{users.length}</div>
                <div className="text-sm text-slate-400">총 수강생</div>
              </div>
            </div>
          </Card>

          <Card className="p-4 bg-slate-800/50 border-slate-700">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-green-400" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white">6기</div>
                <div className="text-sm text-slate-400">현재 기수</div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* 수강생 그리드 */}
      <Suspense>
        <UsersGrid users={users} assignments={assignments} />
      </Suspense>
    </div>
  );
};

export const Home = Object.assign(HomePage, {
  Provider: HomeProvider,
});
