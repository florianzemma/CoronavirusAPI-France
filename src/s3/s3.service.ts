import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import { CovidData } from 'src/data/interface';

@Injectable()
export class S3Service {
  constructor(private configService: ConfigService) {}

  getFileS3 = async (key: string): Promise<CovidData[]> => {
    const s3 = new S3();
    const data = await s3
      .getObject({
        Key: key,
        Bucket: this.configService.get('AWS_BUCKET_NAME'),
        ResponseContentType: 'application/json',
      })
      .promise();

    return JSON.parse(data.Body.toString('utf-8')) as CovidData[];
  };
}
