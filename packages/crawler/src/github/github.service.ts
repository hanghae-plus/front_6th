import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { GithubPullRequest, MOCK_PR } from './mock';

@Injectable()
export class GithubService {
  readonly #client: AxiosInstance;

  constructor() {
    this.#client = axios.create({
      baseURL: 'https://api.github.com',
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
    });
  }

  getPulls(path: string) {
    return this.#client
      .get<GithubPullRequest[]>(`/repos/${path}/pulls`, {
        params: {
          state: 'open',
          sort: 'created',
          direction: 'asc',
          per_page: 100,
        },
      })
      .then((res) => {
        console.log(res.headers);
        return res.data;
      });
  }

  getPull(path: string, number: number) {
    return this.#client
      .get<GithubPullRequest>(`/repos/${path}/pulls/${number}`)
      .then((res) => res.data);
  }
}
