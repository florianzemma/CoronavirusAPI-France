import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { CovidDataDep, CovidDataFr } from 'src/data/interface';
import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3';

@Injectable()
export class S3Service {
  constructor(private configService: ConfigService) {}

  getFileS3 = async (key: string): Promise<CovidDataDep[] | CovidDataFr[]> => {
    const streamToJson = (stream): Promise<unknown> =>
      new Promise((resolve, reject): void => {
        const chunks = [];
        stream.on('data', (chunk): number => chunks.push(chunk));
        stream.on('error', reject);
        stream.on('end', (): void =>
          resolve(JSON.parse(Buffer.concat(chunks).toString('utf8'))),
        );
      });

    const s3client = new S3Client({
      credentials: {
        accessKeyId: this.configService.get('AWS_ACCESS_KEY_ID'),
        secretAccessKey: this.configService.get('AWS_SECRET_ACCESS_KEY'),
      },
      region: this.configService.get('AWS_REGION'),
    });

    const bucketParams = {
      Bucket: this.configService.get('AWS_BUCKET_NAME'),
      Key: key,
      ResponseContentType: 'application/json',
    };

    const data = await s3client.send(new GetObjectCommand(bucketParams));
    return (await streamToJson(data.Body)) as CovidDataFr[] | CovidDataDep[];
  };
}
