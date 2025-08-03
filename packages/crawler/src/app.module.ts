import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { GithubModule } from './github/github.module';
import { HanghaeModule } from './hanghae/hanghae';

@Module({
  imports: [GithubModule, HanghaeModule, ConfigModule.forRoot()],
  providers: [AppService],
})
export class AppModule {}
