import { ASSIGNMENT_MOCK, ASSIGNMENT_USERS_TOTAL_STATUS_MOCK, MOCK_PR } from "./mock";

export type GithubPullRequest = typeof MOCK_PR;

export interface GithubUser {
  id: string;
  image: string;
  link: string;
}

export type AssignmentResponseType = typeof ASSIGNMENT_MOCK;

export type AssignmentUsersTotalStatusResponseType = typeof ASSIGNMENT_USERS_TOTAL_STATUS_MOCK;

export interface AssignmentResult {
  passed: boolean;
  theBest: boolean;
  name: string;
  feedback: string;
  assignment: {
    name: string;
    url: string;
  };
}
