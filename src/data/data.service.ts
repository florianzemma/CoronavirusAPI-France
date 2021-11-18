import { TaskService } from './../task/task.service';
import { CovidData } from './interface';
/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable } from '@nestjs/common';
import { format, startOfYesterday } from 'date-fns';
import * as helper from '../helpers';

const covidDataListFR: CovidData[] = require('../../covidDataFR.json');
const covidDataListDEP: CovidData[] = require('../../covidDataDep.json');

@Injectable()
export class DataService {
  constructor(private taskService: TaskService) {}
  getLiveData(): CovidData[] | string {
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
    console.log(yesterdayData);
    return dataOfToday.length
      ? dataOfToday
      : yesterdayData.length
      ? yesterdayData
      : 'No data found';
  }

  getLiveDataForAllDepartement(): CovidData[] | string {
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

  getLiveDataByDepartementName(name: string): CovidData[] | string {
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

  getLiveDataByRegionName(name: string): CovidData[] | string {
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

  getDataByDepartementName(name: string): CovidData[] | string {
    const dataByDepepartment: CovidData[] = covidDataListDEP.filter(
      (data: CovidData) =>
        helper.removeAccentAndLowercase(data.lib_dep) ===
        helper.removeAccentAndLowercase(name),
    );
    return dataByDepepartment.length ? dataByDepepartment : 'No data found';
  }

  getDataByRegionName(name: string): CovidData[] | string {
    const dataByDepartement: CovidData[] = covidDataListDEP.filter(
      (data: CovidData) =>
        helper.removeAccentAndLowercase(data.lib_reg) ===
        helper.removeAccentAndLowercase(name),
    );
    return dataByDepartement.length ? dataByDepartement : 'No data found';
  }

  getDataDepartementByDate(date: string): CovidData[] | string {
    const dataByDate: CovidData[] = covidDataListDEP.filter(
      (data: CovidData) => data.date === format(new Date(date), 'yyyy-dd-MM'),
    );
    return dataByDate.length ? dataByDate : 'No data found';
  }

  getDataFRByDate(date: string): CovidData[] | string {
    const dataByDate: CovidData[] = covidDataListFR.filter(
      (data: CovidData) => data.date === format(new Date(date), 'yyyy-dd-MM'),
    );
    return dataByDate.length ? dataByDate : 'No data found';
  }

  getDataByDepartementNameByDate(
    name: string,
    date: string,
  ): CovidData[] | string {
    const dataByDepartment: CovidData[] = covidDataListDEP.filter(
      (data: CovidData) =>
        helper.removeAccentAndLowercase(data.lib_dep) ===
          helper.removeAccentAndLowercase(name) &&
        data.date === format(new Date(date), 'yyyy-dd-MM'),
    );
    return dataByDepartment.length ? dataByDepartment : 'No data found';
  }

  getDataByRegionNameByDate(name: string, date: string): CovidData[] | string {
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
