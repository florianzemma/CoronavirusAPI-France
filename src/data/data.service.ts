/* eslint-disable @typescript-eslint/no-var-requires */
import { S3Service } from './../s3/s3.service';
import { TaskService } from './../task/task.service';
import { CovidData } from './interface';
import { Injectable } from '@nestjs/common';
import { format, startOfYesterday } from 'date-fns';
import * as helper from '../helpers';

@Injectable()
export class DataService {
  constructor(private taskService: TaskService, private s3Service: S3Service) {}
  async getLiveData(): Promise<CovidData[] | string> {
    const covidDataListFR: CovidData[] = await this.s3Service.getFileS3(
      'covidDataFR.json',
    );
    const yesterdayDate: string = format(startOfYesterday(), 'yyyy-MM-dd');
    const todayDate: string = format(new Date(), 'yyyy-MM-dd');
    let yesterdayData: CovidData[] | null = null;
    const dataOfToday: CovidData[] = covidDataListFR.filter(
      (data: CovidData) => data.date === todayDate,
    );

    if (!dataOfToday.length) {
      yesterdayData = covidDataListFR.filter(
        (data: CovidData) => data.date === yesterdayDate,
      );
    }
    return dataOfToday.length
      ? dataOfToday
      : yesterdayData.length
      ? yesterdayData
      : 'No data found';
  }

  async getLiveDataForAllDepartement(): Promise<CovidData[] | string> {
    const covidDataListDEP: CovidData[] = await this.s3Service.getFileS3(
      'covidDataDep.json',
    );
    const yesterdayDate: string = format(startOfYesterday(), 'yyyy-MM-dd');
    const todayDate: string = format(new Date(), 'yyyy-MM-dd');
    let yesterdayData: CovidData[] | null = null;
    const dataOfToday: CovidData[] = covidDataListDEP.filter(
      (data: CovidData) => data.date === todayDate,
    );

    if (!dataOfToday.length) {
      yesterdayData = covidDataListDEP.filter(
        (data: CovidData) => data.date === yesterdayDate,
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
  ): Promise<CovidData[] | string> {
    const covidDataListDEP: CovidData[] = await this.s3Service.getFileS3(
      'covidDataDep.json',
    );
    const yesterdayDate: string = format(startOfYesterday(), 'yyyy-MM-dd');
    const todayDate: string = format(new Date(), 'yyyy-MM-dd');
    let yesterdayData: CovidData[] | null = null;
    const dataOfToday: CovidData[] = covidDataListDEP.filter(
      (data: CovidData) =>
        data.date === todayDate &&
        helper.removeAccentAndLowercase(data.lib_dep) ===
          helper.removeAccentAndLowercase(name),
    );
    if (!dataOfToday.length) {
      yesterdayData = covidDataListDEP.filter(
        (data: CovidData) =>
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

  async getLiveDataByRegionName(name: string): Promise<CovidData[] | string> {
    const covidDataListDEP: CovidData[] = await this.s3Service.getFileS3(
      'covidDataDep.json',
    );
    const yesterdayDate: string = format(startOfYesterday(), 'yyyy-MM-dd');
    const todayDate: string = format(new Date(), 'yyyy-MM-dd');
    let yesterdayData: CovidData[] | null = null;
    const dataOfToday: CovidData[] = covidDataListDEP.filter(
      (data: CovidData) =>
        data.date === todayDate &&
        helper.removeAccentAndLowercase(data.lib_reg) ===
          helper.removeAccentAndLowercase(name),
    );
    if (!dataOfToday.length) {
      yesterdayData = covidDataListDEP.filter(
        (data: CovidData) =>
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

  async getDataByDepartementName(name: string): Promise<CovidData[] | string> {
    const covidDataListDEP: CovidData[] = await this.s3Service.getFileS3(
      'covidDataDep.json',
    );
    const dataByDepepartment: CovidData[] = covidDataListDEP.filter(
      (data: CovidData) =>
        helper.removeAccentAndLowercase(data.lib_dep) ===
        helper.removeAccentAndLowercase(name),
    );
    return dataByDepepartment.length ? dataByDepepartment : 'No data found';
  }

  async getDataByRegionName(name: string): Promise<CovidData[] | string> {
    const covidDataListDEP: CovidData[] = await this.s3Service.getFileS3(
      'covidDataDep.json',
    );
    const dataByDepartement: CovidData[] = covidDataListDEP.filter(
      (data: CovidData) =>
        helper.removeAccentAndLowercase(data.lib_reg) ===
        helper.removeAccentAndLowercase(name),
    );
    return dataByDepartement.length ? dataByDepartement : 'No data found';
  }

  async getDataDepartementByDate(date: string): Promise<CovidData[] | string> {
    const covidDataListDEP: CovidData[] = await this.s3Service.getFileS3(
      'covidDataDep.json',
    );
    const dataByDate: CovidData[] = covidDataListDEP.filter(
      (data: CovidData) => data.date === format(new Date(date), 'yyyy-dd-MM'),
    );
    return dataByDate.length ? dataByDate : 'No data found';
  }

  async getDataFRByDate(date: string): Promise<CovidData[] | string> {
    const covidDataListFR: CovidData[] = await this.s3Service.getFileS3(
      'covidDataFR.json',
    );
    const dataByDate: CovidData[] = covidDataListFR.filter(
      (data: CovidData) => data.date === format(new Date(date), 'yyyy-dd-MM'),
    );
    return dataByDate.length ? dataByDate : 'No data found';
  }

  async getDataByDepartementNameByDate(
    name: string,
    date: string,
  ): Promise<CovidData[] | string> {
    const covidDataListDEP: CovidData[] = await this.s3Service.getFileS3(
      'covidDataDep.json',
    );
    const dataByDepartment: CovidData[] = covidDataListDEP.filter(
      (data: CovidData) =>
        helper.removeAccentAndLowercase(data.lib_dep) ===
          helper.removeAccentAndLowercase(name) &&
        data.date === format(new Date(date), 'yyyy-dd-MM'),
    );
    return dataByDepartment.length ? dataByDepartment : 'No data found';
  }

  async getDataByRegionNameByDate(
    name: string,
    date: string,
  ): Promise<CovidData[] | string> {
    const covidDataListDEP: CovidData[] = await this.s3Service.getFileS3(
      'covidDataDep.json',
    );
    const dataByRegion: CovidData[] = covidDataListDEP.filter(
      (data: CovidData) =>
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
