import { useUserIdByParam } from "@/features";
import { useAssignmentsByUser } from "@/features/assignments";
import { Card } from "@/components";
import { Suspense } from "react";

export const User = () => {
  const userId = useUserIdByParam();
  const posts = useAssignmentsByUser(userId);
  return (
    <main className="max-w-7xl mx-auto px-4 py-4">
      {/* 상단 통계 */}
      <div className="mb-4 space-y-4">
        {/* 통계 카드 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <Card className="p-3">
            <div className="flex items-center space-x-2">
              <div>
                <div className="text-lg font-bold text-white">{userId}</div>
                <Suspense>
                  <div className="text-xs text-slate-400">총 과제: {posts.data.length}</div>
                </Suspense>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </main>
  );
};
