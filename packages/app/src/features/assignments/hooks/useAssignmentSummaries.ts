import { useMemo } from "react";
import { useAppDataContext } from "@/providers";
import type { AssignmentSummary } from "../types";

const ASSIGNMENTS_INFO: Record<string, { chapter: string; title: string }> = {
  "hanghae-plus/front_6th_chapter1-1": {
    chapter: "1. 자바스크립트 딥다이브",
    title: "1-1. 프레임워크 없이 SPA 만들기 (1)",
  },
  "hanghae-plus/front_6th_chapter1-2": {
    chapter: "1. 자바스크립트 딥다이브",
    title: "1-2. 프레임워크 없이 SPA 만들기 (2)",
  },
  "hanghae-plus/front_6th_chapter1-3": {
    chapter: "1. 자바스크립트 딥다이브",
    title: "1-3. React, Beyond the Basics",
  },
  "hanghae-plus/front_6th_chapter2-1": { chapter: "2. 클린코드", title: "2-1. 클린코드와 리팩토링" },
  "hanghae-plus/front_6th_chapter2-2": {
    chapter: "2. 클린코드",
    title: "2-2. 디자인 패턴과 함수형 프로그래밍",
  },
  "hanghae-plus/front_6th_chapter2-3": { chapter: "2. 클린코드", title: "2-3. 관심사 분리와 폴더구조" },
  "hanghae-plus/front_6th_chapter3-1": { chapter: "3. 테스트", title: "3-1. 프런트엔드 테스트 코드 (1)" },
  "hanghae-plus/front_6th_chapter3-2": { chapter: "3. 테스트", title: "3-2. 프런트엔드 테스트 코드 (2)" },
  "hanghae-plus/front_6th_chapter4-1": { chapter: "4. 성능최적화", title: "4-1. SSR, SSG, Infra" },
  "hanghae-plus/front_6th_chapter4-2": { chapter: "4. 성능최적화", title: "4-2. 코드 관점의 성능 최적화" },
};

export const useAssignmentSummaries = () => {
  const { data } = useAppDataContext();

  const allAssignments = data.assignmentDetails;

  const summaries = useMemo(() => {
    // Check if data exists
    if (!data || !data.users) {
      return [];
    }

    // Extract repository URL from PR URL
    const getRepositoryFromUrl = (prUrl: string): string => {
      const match = prUrl.match(/github\.com\/(.*?)\/pull/);
      return match ? match[1] : "";
    };

    const assignmentMap = new Map<
      string,
      {
        title: string;
        chapter: string;
        repository: string;
        submissions: Array<{
          id: number;
          passed: boolean;
          theBest?: boolean;
          userId: string;
          userName: string;
          prUrl: string;
        }>;
      }
    >();

    // Process all user assignments
    Object.entries(data.users).forEach(([userId, user]) => {
      user.assignments?.forEach((assignment) => {
        const repository = getRepositoryFromUrl(assignment.url);
        if (!repository) return;

        if (!assignmentMap.has(repository)) {
          const assignmentInfo = ASSIGNMENTS_INFO[repository];
          assignmentMap.set(repository, {
            title: assignmentInfo.title,
            chapter: assignmentInfo.chapter,
            repository,
            submissions: [],
          });
        }

        const existing = assignmentMap.get(repository);
        if (!existing) {
          return;
        }
        // Check if this user already submitted to this assignment
        const existingSubmission = existing.submissions.find((v) => v.userId === userId);
        const assignmentId = allAssignments[assignment.url]?.id;
        if (existingSubmission || !assignmentId) {
          return;
        }
        existing.submissions.push({
          id: assignmentId,
          passed: assignment.passed,
          theBest: assignment.theBest,
          userId,
          userName: user.name,
          prUrl: assignment.url,
        });
      });
    });

    const result: AssignmentSummary[] = Array.from(assignmentMap.entries()).map(([repository, data]) => {
      const totalSubmissions = data.submissions.length;
      const passedCount = data.submissions.filter((s) => s.passed).length;
      const bestPracticeUsers = data.submissions
        .filter((v) => v.theBest)
        .map((v) => ({
          assignmentId: v.id,
          userId: v.userId,
          userName: v.userName,
          prUrl: v.prUrl,
        }));

      const bestPracticeCount = bestPracticeUsers.length;
      const passRate = totalSubmissions > 0 ? (passedCount / totalSubmissions) * 100 : 0;

      return {
        title: data.title,
        chapter: data.chapter,
        repository,
        totalSubmissions,
        bestPracticeCount,
        passedCount,
        passRate: Math.round(passRate * 10) / 10,
        bestPracticeUsers,
        id: repository,
        url: `https://github.com/${repository}`,
      };
    });

    // Sort by chapter order
    return result.sort((a, b) => {
      const getChapterNumber = (chapter: string) => {
        const match = chapter.match(/(\d+)주차/);
        return match ? parseInt(match[1]) : 999;
      };

      const aChapter = getChapterNumber(a.chapter);
      const bChapter = getChapterNumber(b.chapter);

      return aChapter !== bChapter ? aChapter - bChapter : a.title.localeCompare(b.title);
    });
  }, [allAssignments, data]);

  const stats = useMemo(() => {
    const totalAssignments = summaries.length;
    const totalSubmissions = summaries.reduce((acc, s) => acc + s.totalSubmissions, 0);
    const totalBestPractices = summaries.reduce((acc, s) => acc + s.bestPracticeCount, 0);
    const averagePassRate =
      summaries.length > 0 ? summaries.reduce((acc, s) => acc + s.passRate, 0) / summaries.length : 0;

    return {
      totalAssignments,
      totalSubmissions,
      totalBestPractices,
      averagePassRate: Math.round(averagePassRate * 10) / 10,
    };
  }, [summaries]);

  return { summaries, stats };
};
