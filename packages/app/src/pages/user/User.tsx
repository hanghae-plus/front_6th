import type { GithubUser, UserWIthCommonAssignments } from "@hanghae-plus/domain";
import { type PropsWithChildren, useMemo } from "react";
import { Link } from "react-router";
import { Calendar, Clock, Github, StarIcon } from "lucide-react";
import { useUserIdByParam, useUserWithAssignments } from "@/features";
import { Badge, Card } from "@/components";
import { formatDate } from "@/lib";
import { type Assignment, PageProvider, usePageData } from "@/providers";

const UserProfile = ({ id, name, image, link }: GithubUser & { name: string }) => {
  return (
    <div className="sticky top-6">
      <a href={link} target="_blank">
        <Card className="p-6">
          <div className="flex flex-col items-center text-center space-y-4">
            {/* 프로필 이미지 */}
            <div className="relative">
              <div className="w-48 h-48 rounded-full overflow-hidden ring-4 ring-orange-500/30">
                <img src={image} alt={id} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* 사용자 정보 */}
            <div className="w-full">
              <h3 className="text-2xl font-bold text-white mb-2">{id}</h3>
              <p>{name}</p>
            </div>
          </div>
        </Card>
      </a>
    </div>
  );
};

const AssignmentCard = ({ id, title, url, createdAt, theBest }: Assignment) => {
  return (
    <Card className="hover:shadow-glow transition-all duration-300 cursor-pointer group bg-card border border-border">
      <Link to={`./assignment/${id}/`} className="block">
        <div className="p-6">
          <div className="flex flex-col space-y-3">
            {/* 과제 제목 */}
            <h3 className="text-lg font-semibold text-white group-hover:text-orange-300 transition-colors leading-tight">
              {title}
            </h3>

            {/* 메타 정보 */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-xs text-slate-500">
                {theBest && (
                  <Badge variant="secondary" className="text-xs bg-green-800">
                    <StarIcon />
                    베스트
                  </Badge>
                )}
                <Link
                  to={url}
                  className="text-xs text-slate-400 flex items-center space-x-1 hover:underline underline-offset-4"
                  target="_blank"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Github className="w-3 h-3" />
                  <span>Pull Request</span>
                </Link>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{formatDate(createdAt)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>5분 읽기</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Card>
  );
};

const AssignmentsList = ({ items }: { items: Assignment[] }) => {
  const sortedAssignments = useMemo(() => {
    return [...items].sort((a, b) => a.title.localeCompare(b.title));
  }, [items]);

  return (
    <div className="space-y-4">
      {sortedAssignments.map((assignment) => (
        <AssignmentCard key={assignment.id} {...assignment} />
      ))}
    </div>
  );
};

const UserStats = ({ assignmentCount }: { assignmentCount: number }) => {
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">제출한 과제</h2>
        <Badge variant="secondary" className="text-sm bg-slate-700">
          총 {assignmentCount}개
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4 bg-slate-800/50 border-slate-700">
          <div className="text-2xl font-bold text-white">{assignmentCount}</div>
          <div className="text-sm text-slate-400">총 과제 수</div>
        </Card>

        <Card className="p-4 bg-slate-800/50 border-slate-700">
          <div className="text-2xl font-bold text-green-400">{assignmentCount}</div>
          <div className="text-sm text-slate-400">완료한 과제</div>
        </Card>

        <Card className="p-4 bg-slate-800/50 border-slate-700">
          <div className="text-2xl font-bold text-orange-400">100%</div>
          <div className="text-sm text-slate-400">완성도</div>
        </Card>
      </div>
    </div>
  );
};

const UserProvider = ({ children }: PropsWithChildren) => {
  const userId = useUserIdByParam();
  const user = useUserWithAssignments(userId);

  console.log(user);

  return (
    <PageProvider title={`${user.github.id} 님의 상세페이지`} data={user}>
      {children}
    </PageProvider>
  );
};

export const User = Object.assign(
  () => {
    const { assignments, ...user } = usePageData<
      Omit<UserWIthCommonAssignments, "assignments"> & { assignments: Record<string, Assignment> }
    >();

    const assignmentList = Object.values(assignments);

    return (
      <div className="px-4 py-6">
        <div className="lg:flex lg:gap-8">
          {/* 왼쪽 프로필 영역 */}
          <div className="lg:w-[300px]">
            <UserProfile {...user.github} name={user.name} />
          </div>

          {/* 오른쪽 과제 목록 영역 */}
          <div className="lg:flex-1">
            <UserStats assignmentCount={assignmentList.length} />
            <AssignmentsList items={assignmentList} />
          </div>
        </div>
      </div>
    );
  },
  {
    Provider: UserProvider,
  },
);
