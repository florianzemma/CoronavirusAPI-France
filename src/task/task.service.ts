/* eslint-disable @typescript-eslint/no-var-requires */
import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import axios from 'axios';
import {
  PutObjectCommand,
  PutObjectCommandOutput,
  S3Client,
} from '@aws-sdk/client-s3';
const { StringStream } = require('scramjet');
const Papa = require('papaparse');

@Injectable()
export class TaskService {
  constructor(private configService: ConfigService) {}
  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  getCovidDataFromFile(): void {
    const uploadFileS3 = async (
      data: string,
      filename: string,
    ): Promise<PutObjectCommandOutput> => {
      const jsonContent: string = JSON.stringify(data);
      const s3client = new S3Client({
        credentials: {
          accessKeyId: this.configService.get('AWS_ACCESS_KEY_ID'),
          secretAccessKey: this.configService.get('AWS_SECRET_ACCESS_KEY'),
        },
        region: this.configService.get('AWS_REGION'),
      });
      const bucketParams = {
        Bucket: this.configService.get('AWS_BUCKET_NAME'),
        Body: jsonContent,
        Key: filename,
      };
      return await s3client.send(new PutObjectCommand(bucketParams));
    };

    const getDataByDep = async (): Promise<void> => {
      const req = await axios({
        method: 'GET',
        url: 'https://www.data.gouv.fr/fr/datasets/r/5c4e1452-3850-4b59-b11c-3dd51d7fb8b5',
        responseType: 'stream',
      });
      const csv = req.data.pipe(new StringStream());
      Papa.parse(csv, {
        dynamicTyping: true,
        header: true,
        complete: function (result) {
          uploadFileS3(result.data, 'covidDataDep.json');
          console.log('File has been uploaded');
        },
      });
    };

    const getDataForFrance = async (): Promise<void> => {
      const req = await axios({
        method: 'GET',
        url: 'https://www.data.gouv.fr/fr/datasets/r/f335f9ea-86e3-4ffa-9684-93c009d5e617',
        responseType: 'stream',
      });
      const csv = req.data.pipe(new StringStream());
      Papa.parse(csv, {
        dynamicTyping: true,
        header: true,
        complete: function (result) {
          uploadFileS3(result.data, 'covidDataFR.json');
          console.log('File has been uploaded');
        },
      });
    };
    getDataByDep();
    getDataForFrance();
  }
}
