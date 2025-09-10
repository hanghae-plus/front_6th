import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Award, CheckCircle, ExternalLink, Star, TrendingUp, Users } from "lucide-react";
import type { AssignmentSummary } from "../types";
import { Link } from "react-router";
import { useUser } from "@/features";

const UserInfo = ({ userId, userName, assignmentId }: AssignmentSummary["bestPracticeUsers"][number]) => {
  const userDetail = useUser(userId);
  const { avatar_url, login } = userDetail.github;
  return (
    <Link
      to={`/@${userId}/assignment/${assignmentId}/`}
      className="flex items-center gap-2 group transition-colors hover:bg-gray-800/60 rounded-lg px-2 py-1"
      aria-label={`${userName}의 BP 상세보기`}
    >
      <div className="w-6 h-6 rounded-full overflow-hidden border-2 border-transparent group-hover:border-amber-300 transition-all">
        <img src={avatar_url} alt={login} className="w-full h-full object-cover" />
      </div>
      <h4 className="text-sm font-semibold text-gray-100 group-hover:text-amber-300 transition-colors">{userName}</h4>
    </Link>
  );
};

export function AssignmentCard({
  title,
  chapter,
  totalSubmissions,
  bestPracticeCount,
  passedCount,
  passRate,
  bestPracticeUsers,
  url,
}: AssignmentSummary) {
  const getPassRateColor = (rate: number) => {
    if (rate >= 80) return "text-green-400 bg-green-900/20 border border-green-500/30";
    if (rate >= 60) return "text-yellow-400 bg-yellow-900/20 border border-yellow-500/30";
    return "text-red-400 bg-red-900/20 border border-red-500/30";
  };

  return (
    <Card className="hover:shadow-xl transition-all duration-300 bg-gray-900/50 border border-gray-700 hover:border-blue-500/50 backdrop-blur-sm">
      <Card.Header>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <Card.Description className="mt-1">
              <Badge variant="outline" className="text-xs border-gray-600 text-gray-300 bg-gray-800/50">
                {chapter}
              </Badge>
            </Card.Description>
            <div className="flex items-center gap-2">
              <Card.Title className="text-lg font-semibold text-gray-100 line-clamp-2">{title}</Card.Title>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </Card.Header>

      <Card.Content>
        <div className="flex gap-8 mb-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4 text-blue-400" />
              <p className="text-sm text-gray-400">제출 인원</p>
            </div>
            <p className="font-semibold text-gray-100">{totalSubmissions}명</p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <Award className="h-4 w-4 text-amber-400" />
              <p className="text-sm text-gray-400">BP 수</p>
            </div>
            <p className="font-semibold text-gray-100">{bestPracticeCount}개</p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-green-400" />
              <p className="text-sm text-gray-400">통과 인원</p>
            </div>
            <p className="font-semibold text-gray-100">{passedCount}명</p>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-1">
              <TrendingUp className="h-4 w-4 text-purple-400" />
              <p className="text-sm text-gray-400">통과율</p>
            </div>
            <Badge className={`${getPassRateColor(passRate)} font-semibold`}>{passRate}%</Badge>
          </div>
        </div>

        {bestPracticeCount > 0 && (
          <div className="border-t border-gray-700 pt-4">
            <div className="flex items-center gap-2 text-sm font-medium text-amber-400 hover:text-amber-300 transition-colors">
              <Star className="h-4 w-4" />
              BP 획득자 {bestPracticeCount}명
            </div>

            <div className="mt-3 gap-4 flex flex-wrap">
              {bestPracticeUsers.map((user, index) => (
                <UserInfo key={`${user.userId}-${index}`} {...user} />
              ))}
            </div>
          </div>
        )}
      </Card.Content>
    </Card>
  );
}
