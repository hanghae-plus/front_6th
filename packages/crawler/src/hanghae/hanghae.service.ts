import {
  AssignmentResponseType,
  AssignmentUsersTotalStatusResponseType,
} from '@hanghae-plus/domain';
import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class HanghaeService {
  readonly #client: AxiosInstance;

  constructor() {
    this.#client = axios.create({
      baseURL: 'https://api-hanghae99.spartacodingclub.kr/v3/',
    });
  }

  getAssignments() {
    return this.#client
      .get<AssignmentResponseType>(
        `/assignments/status/67bd33202fdfb52600961f04`, //유저에 대항하는 ID로 추정
      )
      .then((res) => res.data.data);
  }

  getAssignmentUsersTotalStatus(path: string) {
    return this.#client
      .get<AssignmentUsersTotalStatusResponseType>(
        `/assignment-users/total-status/${path}`,
      )
      .then((res) => res.data.data);
  }
}
