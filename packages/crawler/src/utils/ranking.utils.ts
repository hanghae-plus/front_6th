import {
  UserWIthCommonAssignments,
  UserWIthCommonAssignmentsWithRanking,
} from '@hanghae-plus/domain';

// 랭킹 시스템 상수
const RANKING_CONSTANTS = {
  // 점수 계산
  COMPLETION_SCORE: 30, // 과제 완료당 점수
  BEST_PRACTICE_SCORE: 40, // BP 선정당 점수

  // 완료율 보너스
  COMPLETION_100_BONUS: 100, // 100% 완료 보너스
  COMPLETION_90_BONUS: 50, // 90% 이상 완료 보너스
  COMPLETION_80_BONUS: 25, // 80% 이상 완료 보너스

  // 완료율 기준
  COMPLETION_100_THRESHOLD: 100,
  COMPLETION_90_THRESHOLD: 90,
  COMPLETION_80_THRESHOLD: 80,

  // 등급 결정 기준 (점수 기반)
  MASTER_SCORE_RATE: 85, // 마스터 점수 비율
  DIAMOND_SCORE_RATE: 70, // 다이아몬드 점수 비율
  GOLD_SCORE_RATE: 55, // 골드 점수 비율
  SILVER_SCORE_RATE: 40, // 실버 점수 비율
  BRONZE_SCORE_RATE: 25, // 브론즈 점수 비율
  LEARNER_SCORE_RATE: 10, // 학습자 점수 비율
} as const;

type Grade =
  | '🏆 마스터'
  | '💎 다이아몬드'
  | '🥇 골드'
  | '🥈 실버'
  | '🥉 브론즈'
  | '📚 학습자'
  | '🌱 초보자';

/**
 * 사용자의 점수를 계산합니다.
 * @param user 사용자 정보
 * @param totalAssignments 전체 과제 수
 * @returns 계산된 점수
 */
export function calculateUserScore(
  user: UserWIthCommonAssignments,
  totalAssignments: number,
): number {
  const completedAssignments = user.assignments.filter(
    (assignment) => assignment.passed,
  ).length;

  const bestPracticeCount = user.assignments.filter(
    (assignment) => assignment.theBest,
  ).length;

  const completionRate = (completedAssignments / totalAssignments) * 100;

  // 기본 점수 계산
  let score =
    completedAssignments * RANKING_CONSTANTS.COMPLETION_SCORE +
    bestPracticeCount * RANKING_CONSTANTS.BEST_PRACTICE_SCORE;

  // 완료율 보너스 계산
  if (completionRate >= RANKING_CONSTANTS.COMPLETION_100_THRESHOLD) {
    score += RANKING_CONSTANTS.COMPLETION_100_BONUS;
  }

  if (completionRate >= RANKING_CONSTANTS.COMPLETION_90_THRESHOLD) {
    score += RANKING_CONSTANTS.COMPLETION_90_BONUS;
  }

  if (completionRate >= RANKING_CONSTANTS.COMPLETION_80_THRESHOLD) {
    score += RANKING_CONSTANTS.COMPLETION_80_BONUS;
  }

  return score;
}

/**
 * 사용자의 등급을 결정합니다.
 * @param user 사용자 정보
 * @param totalAssignments 전체 과제 수
 * @returns 결정된 등급
 */
export function determineGrade(
  user: UserWIthCommonAssignments,
  totalAssignments: number,
): Grade {
  const score = calculateUserScore(user, totalAssignments);

  const maxScore =
    totalAssignments *
      (RANKING_CONSTANTS.COMPLETION_SCORE +
        RANKING_CONSTANTS.BEST_PRACTICE_SCORE) +
    100;

  const scorePercentage = (score / maxScore) * 100;

  // 점수 기반 등급 결정
  if (scorePercentage >= RANKING_CONSTANTS.MASTER_SCORE_RATE) {
    return '🏆 마스터';
  }

  if (scorePercentage >= RANKING_CONSTANTS.DIAMOND_SCORE_RATE) {
    return '💎 다이아몬드';
  }

  if (scorePercentage >= RANKING_CONSTANTS.GOLD_SCORE_RATE) {
    return '🥇 골드';
  }

  if (scorePercentage >= RANKING_CONSTANTS.SILVER_SCORE_RATE) {
    return '🥈 실버';
  }

  if (scorePercentage >= RANKING_CONSTANTS.BRONZE_SCORE_RATE) {
    return '🥉 브론즈';
  }

  if (scorePercentage >= RANKING_CONSTANTS.LEARNER_SCORE_RATE) {
    return '📚 학습자';
  }

  return '🌱 초보자';
}

/**
 * 사용자 객체에 점수와 등급을 추가합니다.
 * @param users 사용자 목록
 * @param totalAssignments 전체 과제 수
 * @returns 점수와 등급이 추가된 사용자 목록
 */
export function addRankingToUsers(
  users: Record<string, UserWIthCommonAssignments>,
  totalAssignments: number,
): Record<string, UserWIthCommonAssignments> {
  return Object.entries(users).reduce(
    (acc, [userId, user]) => {
      const score = calculateUserScore(user, totalAssignments);
      const grade = determineGrade(user, totalAssignments);

      acc[userId] = {
        ...user,
        score,
        grade,
      };

      return acc;
    },
    {} as Record<string, UserWIthCommonAssignmentsWithRanking>,
  );
}
