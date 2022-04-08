/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as fs from 'fs';
import * as path from 'path';
const ModuleArray = [];

fs.readdirSync(path.join(__dirname, '../routers/')).forEach((folders) => {
  const _folders = fs.readdirSync('./src/routers/' + folders + '/');
  _folders.filter(a => a.includes('module')).forEach(mfile => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const { RouterModule } = require(path.join(__dirname, '../routers/' + folders + '/' + mfile.split('.ts')[0]+'.js'));
    ModuleArray.push(RouterModule)
  });
});
@Module({
  imports: ModuleArray,
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
