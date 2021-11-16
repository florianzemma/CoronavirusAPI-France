import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { TaskService } from './task.service';

@Module({
  imports: [HttpModule],
  providers: [TaskService],
  exports: [TaskService],
})
export class TaskModule {}
