import { Module } from '@nestjs/common';
import { IndexAppController } from './controller';
import { IndexAppService } from './service';

@Module({
  imports: [],
  controllers: [IndexAppController],
  providers: [IndexAppService],
})
export class RouterModule {}
