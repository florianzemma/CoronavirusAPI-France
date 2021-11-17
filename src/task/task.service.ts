/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import axios from 'axios';
const fs = require('fs');
const { StringStream } = require('scramjet');
const Papa = require('papaparse');

@Injectable()
export class TaskService {
  @Cron(CronExpression.EVERY_2_HOURS)
  getCovidDataFromFile() {
    const writeJsonFile = (data, fileName: string) => {
      const jsonContent: string = JSON.stringify(data);
      fs.writeFile(fileName, jsonContent, 'utf8', function (err) {
        if (err) {
          console.log('An error occured while writing JSON Object to File.');
          return console.log(err);
        }
        console.log('JSON file has been saved.');
      });
    };
    const getDataByDep = async () => {
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
          writeJsonFile(result.data, 'covidDataDep.json');
        },
      });
    };

    const getDataForFrance = async () => {
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
          writeJsonFile(result.data, 'covidDataFR.json');
        },
      });
    };
    getDataByDep();
    getDataForFrance();
  }
}
