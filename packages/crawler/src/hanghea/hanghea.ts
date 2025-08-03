import { Module } from '@nestjs/common';
import { HangheaService } from './hanghea.service';

@Module({
  imports: [],
  providers: [HangheaService],
  exports: [HangheaService],
})
export class HangheaModule {}
