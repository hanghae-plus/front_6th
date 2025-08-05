import {
  AssignmentResponseType,
  AssignmentUsersTotalStatusResponseType,
} from '@hanghae-plus/domain';
import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class HangheaService {
  readonly #client: AxiosInstance;

  constructor() {
    this.#client = axios.create({
      baseURL: process.env.HANGHAE_API,
    });
  }

  getAssignments() {
    return this.#client
      .get<AssignmentResponseType>(
        `/assignments/status/${process.env.HANGHAE_ASSIGNMENTS_STATUS_ID}`,
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
