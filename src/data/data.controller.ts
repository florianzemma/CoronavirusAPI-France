import { CovidDataFr, CovidDataDep } from './interface';
import { DataService } from './data.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('data')
export class DataController {
  constructor(private dataService: DataService) {}

  @Get('live/france')
  async getLiveData(): Promise<CovidDataFr[] | string> {
    return await this.dataService.getLiveData();
  }

  @Get('live/departements')
  async getLiveDataByDep(): Promise<CovidDataDep[] | string> {
    return this.dataService.getLiveDataForAllDepartement();
  }

  @Get('live/departement/:name')
  async getLiveDataByDepName(
    @Param('name') name: string,
  ): Promise<CovidDataDep[] | string> {
    return await this.dataService.getLiveDataByDepartementName(name);
  }

  @Get('live/region/:name')
  async getLiveDataByRegName(
    @Param('name') name: string,
  ): Promise<CovidDataDep[] | string> {
    return await this.dataService.getLiveDataByRegionName(name);
  }

  @Get('france-by-date/:date')
  async getDataFRByDate(
    @Param('date') date: string,
  ): Promise<Promise<CovidDataFr[] | string>> {
    return await this.dataService.getDataFRByDate(date);
  }

  @Get('departements-by-date/:date')
  async getDataDepByDate(
    @Param('date') date: string,
  ): Promise<CovidDataDep[] | string> {
    return await this.dataService.getDataDepartementByDate(date);
  }

  @Get('departement/:name')
  async getDataForOneDep(
    @Param('name') name: string,
  ): Promise<CovidDataDep[] | string> {
    return await this.dataService.getDataByDepartementName(name);
  }

  @Get('departement/:name/:date')
  async getDataForOneDepByDate(
    @Param('name') name: string,
    @Param('date') date: string,
  ): Promise<CovidDataDep[] | string> {
    return await this.dataService.getDataByDepartementNameByDate(name, date);
  }

  @Get('region/:name')
  async getDataByRegName(
    @Param('name') name: string,
  ): Promise<CovidDataDep[] | string> {
    return this.dataService.getDataByRegionName(name);
  }

  @Get('region/:name/:date')
  async getDataByRegNameByDate(
    @Param('name') name: string,
    @Param('date') date: string,
  ): Promise<CovidDataDep[] | string> {
    return await this.dataService.getDataByRegionNameByDate(name, date);
  }

  @Get('update')
  updateData(): void {
    return this.dataService.updateData();
  }
}
