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
    try {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { RouterModule } = require(path.join(__dirname, '../routers/' + folders + '/' + mfile.split('.ts')[0]+'.js'));
      if(!RouterModule) throw new Error(`RouterModule not defined.`)
      ModuleArray.push(RouterModule);
    } catch(error) {
      throw new Error(`[routers${folders}/${mfile}]: An error occurred while loading.\n${error?.message}\n\n`)
    }

  });
});
@Module({
  imports: ModuleArray,
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
