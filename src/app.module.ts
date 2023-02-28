import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from 'src/config/app.configuration';

@Module({
  imports: [
    //根据运行环境加载配置文件
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `${process.env.NODE_ENV}.env`,
      load: [configuration],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
