import { TaskModule } from './../task/task.module';
import { Module } from '@nestjs/common';
import { DataController } from './data.controller';
import { DataService } from './data.service';

@Module({
  controllers: [DataController],
  imports: [TaskModule],
  providers: [DataService],
})
export class DataModule {}
