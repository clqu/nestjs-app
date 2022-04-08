import { Controller, Get } from '@nestjs/common';
import { IndexAppService } from './service';

@Controller('/v1.0')
export class IndexAppController {
  constructor(private readonly appService: IndexAppService) {}

  @Get()
  getHello(): any {
    return this.appService.getIndex();
  }
}
