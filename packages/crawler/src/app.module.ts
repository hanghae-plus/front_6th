import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { GithubModule } from './github/github.module';

@Module({
  imports: [GithubModule, ConfigModule.forRoot()],
  providers: [AppService],
})
export class AppModule {}
