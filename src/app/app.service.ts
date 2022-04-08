import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): {
    hello: string;
    version: number;
    developer: string;
  } {
    return {
      hello: 'world',
      version: 1.0,
      developer: 'clqu',
    };
  }
}
