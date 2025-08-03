import { Module } from '@nestjs/common';
import { HanghaeService } from './hanghae.service';

@Module({
  imports: [],
  providers: [HanghaeService],
  exports: [HanghaeService],
})
export class HanghaeModule {}
