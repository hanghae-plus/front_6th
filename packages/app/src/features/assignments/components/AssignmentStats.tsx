import { Card } from "@/components/ui/Card";
import { Award, FileText, TrendingUp, Users } from "lucide-react";

interface Props {
  totalAssignments: number;
  totalSubmissions: number;
  totalBestPractices: number;
  averagePassRate: number;
}

export function AssignmentStats({ totalAssignments, totalSubmissions, totalBestPractices, averagePassRate }: Props) {
  const statItems = [
    {
      title: "총 과제 수",
      value: totalAssignments,
      icon: FileText,
      color: "text-blue-400 bg-blue-900/20 border-blue-500/30",
    },
    {
      title: "총 제출 수",
      value: totalSubmissions,
      icon: Users,
      color: "text-green-400 bg-green-900/20 border-green-500/30",
    },
    {
      title: "총 BP 수",
      value: totalBestPractices,
      icon: Award,
      color: "text-amber-400 bg-amber-900/20 border-amber-500/30",
    },
    {
      title: "평균 통과율",
      value: `${averagePassRate}%`,
      icon: TrendingUp,
      color: "text-purple-400 bg-purple-900/20 border-purple-500/30",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {statItems.map((item) => (
        <Card key={item.title} className="bg-gray-900/50 border border-gray-700 backdrop-blur-sm">
          <Card.Header className="flex flex-row items-center justify-between space-y-0 pb-2">
            <Card.Title className="text-sm font-medium text-gray-300">{item.title}</Card.Title>
            <div className={`p-2 rounded-lg border ${item.color}`}>
              <item.icon className="h-4 w-4" />
            </div>
          </Card.Header>
          <Card.Content>
            <div className="text-2xl font-bold text-gray-100">{item.value}</div>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
}
