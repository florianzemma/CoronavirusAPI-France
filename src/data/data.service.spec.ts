import { TaskService } from './../task/task.service';
import { Test, TestingModule } from '@nestjs/testing';
import { DataService } from './data.service';
import { S3Service } from 'src/s3/s3.service';

describe('DataService', () => {
  let service: DataService;

  // beforeEach(async () => {
  //   const module: TestingModule = await Test.createTestingModule({
  //     providers: [DataService, TaskService, S3Service],
  //   }).compile();

  //   service = module.get<DataService>(DataService);
  // });

  // it('should be defined', () => {
  //   expect(service).toBeDefined();
  // });
});
