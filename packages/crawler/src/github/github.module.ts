import { Module } from '@nestjs/common';
import { AppService } from '../app.service';
import { GithubService } from './github.service';

@Module({
  imports: [],
  providers: [GithubService],
  exports: [GithubService],
})
export class GithubModule {}
