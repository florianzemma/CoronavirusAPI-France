/* eslint-disable @typescript-eslint/no-var-requires */
import { CovidDataDep, CovidDataFr } from './interface';
import { S3Service } from './../s3/s3.service';
import { TaskService } from './../task/task.service';
import { Injectable } from '@nestjs/common';
import { format, startOfYesterday } from 'date-fns';
import * as helper from '../helpers';

@Injectable()
export class DataService {
  constructor(private taskService: TaskService, private s3Service: S3Service) {}
  async getLiveData(): Promise<CovidDataFr[] | string> {
    const covidDataListFR: CovidDataFr[] = (await this.s3Service.getFileS3(
      'covidDataFR.json',
    )) as CovidDataFr[];
    const yesterdayDate: string = format(startOfYesterday(), 'yyyy-MM-dd');
    const todayDate: string = format(new Date(), 'yyyy-MM-dd');
    let yesterdayData: CovidDataFr[] | null = null;
    const dataOfToday: CovidDataFr[] = covidDataListFR.filter(
      (data: CovidDataFr) => data.date === todayDate,
    );

    if (!dataOfToday.length) {
      yesterdayData = covidDataListFR.filter(
        (data: CovidDataFr) => data.date === yesterdayDate,
      );
    }
    return dataOfToday.length
      ? dataOfToday
      : yesterdayData.length
      ? yesterdayData
      : 'No data found';
  }

  async getLiveDataForAllDepartement(): Promise<CovidDataDep[] | string> {
    const covidDataListDEP: CovidDataDep[] = (await this.s3Service.getFileS3(
      'covidDataDep.json',
    )) as CovidDataDep[];
    const yesterdayDate: string = format(startOfYesterday(), 'yyyy-MM-dd');
    const todayDate: string = format(new Date(), 'yyyy-MM-dd');
    let yesterdayData: CovidDataDep[] | null = null;
    const dataOfToday: CovidDataDep[] = covidDataListDEP.filter(
      (data: CovidDataDep) => data.date === todayDate,
    );

    if (!dataOfToday.length) {
      yesterdayData = covidDataListDEP.filter(
        (data: CovidDataDep) => data.date === yesterdayDate,
      );
    }

    return dataOfToday.length
      ? dataOfToday
      : yesterdayData.length
      ? yesterdayData
      : 'No data found';
  }

  async getLiveDataByDepartementName(
    name: string,
  ): Promise<CovidDataDep[] | string> {
    const covidDataListDEP: CovidDataDep[] = (await this.s3Service.getFileS3(
      'covidDataDep.json',
    )) as CovidDataDep[];
    const yesterdayDate: string = format(startOfYesterday(), 'yyyy-MM-dd');
    const todayDate: string = format(new Date(), 'yyyy-MM-dd');
    let yesterdayData: CovidDataDep[] | null = null;
    const dataOfToday: CovidDataDep[] = covidDataListDEP.filter(
      (data: CovidDataDep) =>
        data.date === todayDate &&
        helper.removeAccentAndLowercase(data.lib_dep) ===
          helper.removeAccentAndLowercase(name),
    );
    if (!dataOfToday.length) {
      yesterdayData = covidDataListDEP.filter(
        (data: CovidDataDep) =>
          data.date === yesterdayDate &&
          helper.removeAccentAndLowercase(data.lib_dep) ===
            helper.removeAccentAndLowercase(name),
      );
    }
    return dataOfToday.length
      ? dataOfToday
      : yesterdayData.length
      ? yesterdayData
      : 'No data found';
  }

  async getLiveDataByRegionName(
    name: string,
  ): Promise<CovidDataDep[] | string> {
    const covidDataListDEP: CovidDataDep[] = (await this.s3Service.getFileS3(
      'covidDataDep.json',
    )) as CovidDataDep[];
    const yesterdayDate: string = format(startOfYesterday(), 'yyyy-MM-dd');
    const todayDate: string = format(new Date(), 'yyyy-MM-dd');
    let yesterdayData: CovidDataDep[] | null = null;
    const dataOfToday: CovidDataDep[] = covidDataListDEP.filter(
      (data: CovidDataDep) =>
        data.date === todayDate &&
        helper.removeAccentAndLowercase(data.lib_reg) ===
          helper.removeAccentAndLowercase(name),
    );
    if (!dataOfToday.length) {
      yesterdayData = covidDataListDEP.filter(
        (data: CovidDataDep) =>
          data.date === yesterdayDate &&
          helper.removeAccentAndLowercase(data.lib_reg) ===
            helper.removeAccentAndLowercase(name),
      );
    }
    return dataOfToday.length
      ? dataOfToday
      : yesterdayData.length
      ? yesterdayData
      : 'No data found';
  }

  async getDataByDepartementName(
    name: string,
  ): Promise<CovidDataDep[] | string> {
    const covidDataListDEP: CovidDataDep[] = (await this.s3Service.getFileS3(
      'covidDataDep.json',
    )) as CovidDataDep[];
    const dataByDepepartment: CovidDataDep[] = covidDataListDEP.filter(
      (data: CovidDataDep) =>
        helper.removeAccentAndLowercase(data.lib_dep) ===
        helper.removeAccentAndLowercase(name),
    );
    return dataByDepepartment.length ? dataByDepepartment : 'No data found';
  }

  async getDataByRegionName(name: string): Promise<CovidDataDep[] | string> {
    const covidDataListDEP: CovidDataDep[] = (await this.s3Service.getFileS3(
      'covidDataDep.json',
    )) as CovidDataDep[];
    const dataByDepartement: CovidDataDep[] = covidDataListDEP.filter(
      (data: CovidDataDep) =>
        helper.removeAccentAndLowercase(data.lib_reg) ===
        helper.removeAccentAndLowercase(name),
    );
    return dataByDepartement.length ? dataByDepartement : 'No data found';
  }

  async getDataDepartementByDate(
    date: string,
  ): Promise<CovidDataDep[] | string> {
    const covidDataListDEP: CovidDataDep[] = (await this.s3Service.getFileS3(
      'covidDataDep.json',
    )) as CovidDataDep[];
    const dataByDate: CovidDataDep[] = covidDataListDEP.filter(
      (data: CovidDataDep) =>
        data.date === format(new Date(date), 'yyyy-dd-MM'),
    );
    return dataByDate.length ? dataByDate : 'No data found';
  }

  async getDataFRByDate(date: string): Promise<CovidDataFr[] | string> {
    const covidDataListFR: CovidDataFr[] = (await this.s3Service.getFileS3(
      'covidDataFR.json',
    )) as CovidDataFr[];
    const dataByDate: CovidDataFr[] = covidDataListFR.filter(
      (data: CovidDataFr) => data.date === format(new Date(date), 'yyyy-dd-MM'),
    );
    return dataByDate.length ? dataByDate : 'No data found';
  }

  async getDataByDepartementNameByDate(
    name: string,
    date: string,
  ): Promise<CovidDataDep[] | string> {
    const covidDataListDEP: CovidDataDep[] = (await this.s3Service.getFileS3(
      'covidDataDep.json',
    )) as CovidDataDep[];
    const dataByDepartment: CovidDataDep[] = covidDataListDEP.filter(
      (data: CovidDataDep) =>
        helper.removeAccentAndLowercase(data.lib_dep) ===
          helper.removeAccentAndLowercase(name) &&
        data.date === format(new Date(date), 'yyyy-dd-MM'),
    );
    return dataByDepartment.length ? dataByDepartment : 'No data found';
  }

  async getDataByRegionNameByDate(
    name: string,
    date: string,
  ): Promise<CovidDataDep[] | string> {
    const covidDataListDEP: CovidDataDep[] = (await this.s3Service.getFileS3(
      'covidDataDep.json',
    )) as CovidDataDep[];
    const dataByRegion: CovidDataDep[] = covidDataListDEP.filter(
      (data: CovidDataDep) =>
        helper.removeAccentAndLowercase(data.lib_reg) ===
          helper.removeAccentAndLowercase(name) &&
        data.date === format(new Date(date), 'yyyy-dd-MM'),
    );
    return dataByRegion.length ? dataByRegion : 'No data found';
  }

  updateData(): void {
    this.taskService.getCovidDataFromFile();
  }
}
