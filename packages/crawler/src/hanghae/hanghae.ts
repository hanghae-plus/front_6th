import { Module } from '@nestjs/common';
import { HanghaeService } from './Hanghae.service';

@Module({
  imports: [],
  providers: [HanghaeService],
  exports: [HanghaeService],
})
export class HanghaeModule {}
