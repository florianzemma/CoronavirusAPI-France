import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DataModule } from './data/data.module';
import { TaskModule } from './task/task.module';
import { TaskService } from './task/task.service';

@Module({
  imports: [DataModule, ScheduleModule.forRoot(), TaskModule, HttpModule],
  controllers: [AppController],
  providers: [AppService, TaskService],
})
export class AppModule {}
