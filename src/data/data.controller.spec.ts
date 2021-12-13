import { TaskService } from './../task/task.service';
import { DataService } from './data.service';
import { Test, TestingModule } from '@nestjs/testing';
import { DataController } from './data.controller';
import { S3Service } from '../s3/s3.service';
import { ConfigService } from '@nestjs/config';

const mockedConfigService = {
  get(key: string) {
    switch (key) {
      case 'AWS_ACCESS_KEY_ID':
        return 'AKIA3DL7KA25ANC3LZ7Q';
      case 'AWS_SECRET_ACCESS_KEY':
        return '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';
      case 'AWS_REGION':
        return 'eu-west-3';
      case 'AWS_BUCKET_NAME':
        return 'covid-data-api-france';
    }
  },
};

describe('DataController', () => {
  let controller: DataController;
  let dataService: DataService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DataController],
      providers: [
        DataService,
        S3Service,
        TaskService,
        {
          provide: ConfigService,
          useValue: mockedConfigService,
        },
      ],
    }).compile();

    controller = module.get<DataController>(DataController);
    dataService = module.get<DataService>(DataService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('live/france', () => {
    it('should return live data for France', async () => {
      const results = await dataService.getLiveData();
      expect(await controller.getLiveData()).toStrictEqual(results);
    });
  });
});
