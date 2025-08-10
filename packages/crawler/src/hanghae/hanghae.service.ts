import {
  AssignmentResponseType,
  AssignmentResult,
  AssignmentUsersTotalStatusResponseType,
} from '@hanghae-plus/domain';
import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { produce } from 'immer';

@Injectable()
export class HanghaeService {
  readonly #client: AxiosInstance;

  constructor() {
    this.#client = axios.create({
      baseURL: process.env.HANGHAE_API,
    });
  }

  private getAssignments() {
    return this.#client
      .get<AssignmentResponseType>(
        `/assignments/status/${process.env.HANGHAE_ASSIGNMENTS_STATUS_ID}`,
      )
      .then((res) => res.data.data);
  }

  private getAssignmentUsersTotalStatus(path: string) {
    return this.#client
      .get<AssignmentUsersTotalStatusResponseType>(
        `/assignment-users/total-status/${path}`,
      )
      .then((res) => res.data.data);
  }

  private sortResults(results: AssignmentResult[]): AssignmentResult[] {
    return results.sort((a, b) => {
      if (a.assignment.name === b.assignment.name) {
        return a.name.localeCompare(b.name, 'ko');
      }
      return a.assignment.name.localeCompare(b.assignment.name, 'ko');
    });
  }

  private adjustResult(results: AssignmentResult[]): AssignmentResult[] {
    return produce(results, (draft) => {
      // 김유현님 1주차 과제 URL 제출 링크 조정
      draft[8].assignment.url =
        'https://github.com/hanghae-plus/front_6th_chapter1-1/pull/22';
      draft[62].assignment.url =
        'https://github.com/hanghae-plus/front_6th_chapter1-1/pull/22';

      // 신홍준님의 1주차 과제 URL 제출 링크 조정
      draft[17].assignment.url =
        'https://github.com/hanghae-plus/front_6th_chapter1-1/pull/77';
      draft[71].assignment.url =
        'https://github.com/hanghae-plus/front_6th_chapter1-1/pull/77';

      // 정민기님 2주차 과제 URL 제출 링크 조정
      draft[151].assignment.url =
        'https://github.com/hanghae-plus/front_6th_chapter1-2/pull/13';
      draft[205].assignment.url =
        'https://github.com/hanghae-plus/front_6th_chapter1-2/pull/13';

      // 김지혜님 4주차 과제 URL 제출 링크 조정
      draft[333].assignment.url =
        'https://github.com/hanghae-plus/front_6th_chapter2-1/pull/22';
      draft[387].assignment.url =
        'https://github.com/hanghae-plus/front_6th_chapter2-1/pull/22';
    });
  }

  public async getAssignmentResults(): Promise<AssignmentResult[]> {
    const assignments = await this.getAssignments();
    const results: AssignmentResult[] = await Promise.all(
      assignments.map(({ assignmentId, name }) =>
        this.getAssignmentUsersTotalStatus(assignmentId).then(
          (userTotalStatus) =>
            userTotalStatus.map((v) => ({
              passed: v.result === 'PASS',
              ...(v.isBestPractice && { theBest: true }),
              name: v.name,
              feedback: v.feedback,
              assignment: { name, url: v.answers[0].answer },
            })),
        ),
      ),
    ).then((v) => v.flat());

    return this.adjustResult(this.sortResults(results));
  }
}
