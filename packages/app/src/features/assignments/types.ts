export interface AssignmentSummary {
  title: string;
  chapter: string;
  repository: string;
  totalSubmissions: number;
  bestPracticeCount: number;
  passedCount: number;
  passRate: number;
  bestPracticeUsers: Array<{
    assignmentId: number;
    userId: string;
    userName: string;
    prUrl: string;
  }>;
  id: string;
  url: string;
}
