import type { CommonAssignment, GithubUser, UserWIthCommonAssignments } from "@hanghae-plus/domain";
import { BookOpen, CheckCircle, Star, Users } from "lucide-react";
import { useUsers } from "@/features";
import { Link } from "react-router";
import { Badge, Card } from "@/components";
import { type PropsWithChildren, Suspense, useMemo } from "react";
import { PageProvider, usePageData } from "@/providers";

const getPullRequests = (assignments: CommonAssignment[]) => {
  const prSet = assignments.reduce(
    (acc, current) => {
      const prev = acc[current.url];
      const assignment = !prev
        ? current
        : {
            url: current.url,
            passed: prev.passed && current.passed,
            theBest: prev.theBest && current.theBest,
          };

      return {
        ...acc,
        [current.url]: assignment,
      };
    },
    {} as Record<string, CommonAssignment>,
  );

  return Object.values(prSet);
};

const UserCard = ({ id, name, image, assignments }: GithubUser & { assignments: CommonAssignment[]; name: string }) => {
  return (
    <Card className="hover:shadow-glow transition-all duration-300 cursor-pointer animate-fade-in hover:scale-[1.02] group bg-card border border-border">
      <Link to={`/@${id}/`} className="block">
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
                {name}({id})
              </h3>
              <div className="flex items-center justify-center space-x-2 text-xs text-slate-400 mt-2">
                <div className="flex items-center space-x-1">
                  <BookOpen className="w-3 h-3 text-blue-400" />
                  <span>{assignments.length}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle className="w-3 h-3 text-green-400" />
                  <span>{assignments.filter((v) => v.passed).length}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 text-yellow-400" />
                  <span>{assignments.filter((v) => v.theBest).length}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};

const UsersGrid = ({ items }: { items: UserWIthCommonAssignments[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {items.map(({ assignments, ...user }) => (
        <UserCard key={user.github.id} {...user.github} name={user.name} assignments={getPullRequests(assignments)} />
      ))}
    </div>
  );
};

const HomeProvider = ({ children }: PropsWithChildren) => {
  const users = useUsers();

  const contextValue = useMemo(() => ({ users }), [users]);

  return (
    <PageProvider title="수강생 목록" data={contextValue}>
      {children}
    </PageProvider>
  );
};

const HomePage = () => {
  const { users } = usePageData<{ users: Record<string, UserWIthCommonAssignments> }>();
  const items = Object.values(users);

  return (
    <div className="px-4 py-6">
      {/* 상단 통계 */}
      <div className="mb-6 space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">수강생 명단</h2>
          <Badge variant="secondary" className="text-sm bg-slate-700">
            총 {items.length}명
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
                <div className="text-2xl font-bold text-white">{items.length}</div>
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
        <UsersGrid items={items} />
      </Suspense>
    </div>
  );
};

export const Home = Object.assign(HomePage, {
  Provider: HomeProvider,
});
