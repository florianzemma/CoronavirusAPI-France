import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from './data/data.module';
import { TaskModule } from './task/task.module';
import { TaskService } from './task/task.service';
import { S3Module } from './s3/s3.module';

@Module({
  imports: [
    DataModule,
    ScheduleModule.forRoot(),
    ConfigModule.forRoot({ isGlobal: true }),
    TaskModule,
    HttpModule,
    S3Module,
  ],
  controllers: [AppController],
  providers: [AppService, TaskService],
})
export class AppModule {}
