import { S3Module } from './../s3/s3.module';
import { TaskModule } from './../task/task.module';
import { Module } from '@nestjs/common';
import { DataController } from './data.controller';
import { DataService } from './data.service';

@Module({
  controllers: [DataController],
  imports: [TaskModule, S3Module],
  providers: [DataService],
})
export class DataModule {}
