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
  theBest?: boolean;
  name: string;
  feedback: string;
  assignment: {
    name: string;
    url: string;
  };
}

export interface UserWIthCommonAssignments {
  name: string;
  github: GithubUser;
  assignments: CommonAssignment[];
}

export interface CommonAssignment extends Pick<AssignmentResult, "passed" | "theBest"> {
  url: string;
}

export type AssignmentDetail = Pick<GithubPullRequest, "id" | "title" | "body"> & {
  user: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
};

export interface AppData {
  users: Record<string, UserWIthCommonAssignments>;
  assignmentDetails: Record<string, AssignmentDetail>;
  feedbacks: Record<string, string>;
}
