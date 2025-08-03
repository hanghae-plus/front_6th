import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { GithubModule } from './github/github.module';
import { HangheaModule } from './hanghea/hanghea';

@Module({
  imports: [GithubModule, HangheaModule, ConfigModule.forRoot()],
  providers: [AppService],
})
export class AppModule {}
