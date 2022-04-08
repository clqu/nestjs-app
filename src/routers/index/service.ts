import { Injectable } from '@nestjs/common';

@Injectable()
export class IndexAppService {
  getIndex(): { hello: string; version: number; developer: string } {
    return {
      hello: 'world',
      version: 1.0,
      developer: 'clqu',
    };
  }
}
