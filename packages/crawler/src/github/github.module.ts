import { Module } from '@nestjs/common';
import { GithubService } from './github.service';

@Module({
  imports: [],
  providers: [GithubService],
  exports: [GithubService],
})
export class GithubModule {}
