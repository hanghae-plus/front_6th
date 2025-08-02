import type { GithubUser } from "@hanghae-plus/domain";
import { BookOpen, Github } from "lucide-react";
import { useUsers } from "@/features";
import { Link } from "react-router";
import { Badge, Card } from "@/components";

const CompactStudentCard = ({ id, link, image }: GithubUser) => {
  return (
    <Card className="p-3 transition-all duration-100 hover:scale-[1.02] hover:shadow-lg group cursor-pointer">
      <Link to={`/user/${id}`} className="flex flex-col items-center text-center space-y-2">
        {/* 프로필 이미지 및 랭킹 */}
        <div className="relative">
          <div className="w-12 h-12 rounded-full overflow-hidden ring-1 ring-orange-500/30 group-hover:ring-orange-400/50 transition-all">
            <img src={image} alt={id} className="w-full h-full object-cover" />
          </div>
        </div>

        {/* 이름 */}
        <div className="space-y-0.5">
          <h3 className="text-sm font-semibold text-white group-hover:text-orange-300 transition-colors truncate w-full">
            {id}
          </h3>
        </div>

        {/* 액션 버튼 */}
        <div className="flex gap-1">
          <Badge className=" text-slate-300 cursor-pointer" onClick={() => window.open(link, "_blank")}>
            <Github className="w-3 h-3" />
          </Badge>
        </div>
      </Link>
    </Card>
  );
};

export const Home = () => {
  const users = useUsers();

  return (
    <main className="max-w-7xl mx-auto px-4 py-4">
      {/* 상단 통계 */}
      <div className="mb-4 space-y-4">
        {/* 통계 카드 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Card className="p-3">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center">
                <BookOpen className="w-4 h-4 text-orange-400" />
              </div>
              <div>
                <div className="text-lg font-bold text-white">{users.items.length}</div>
                <div className="text-xs text-slate-400">총 수강생</div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* 수강생 그리드 - 더 많은 컬럼으로 조정 */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {users.items.map((user) => (
          <CompactStudentCard key={user.id} {...user} />
        ))}
      </div>
    </main>
  );
};
