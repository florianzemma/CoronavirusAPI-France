import { CovidData } from './interface';
import { DataService } from './data.service';
import {
  CacheInterceptor,
  CacheKey,
  Controller,
  Get,
  Param,
  UseInterceptors,
} from '@nestjs/common';

@Controller('data')
export class DataController {
  constructor(private dataService: DataService) {}

  @CacheKey('live/france')
  @UseInterceptors(CacheInterceptor)
  @Get('live/france')
  async getLiveData(): Promise<Promise<CovidData[] | string>> {
    return await this.dataService.getLiveData();
  }

  @CacheKey('live/departements')
  @UseInterceptors(CacheInterceptor)
  @Get('live/departements')
  async getLiveDataByDep(): Promise<CovidData[] | string> {
    return this.dataService.getLiveDataForAllDepartement();
  }

  @Get('live/departement/:name')
  async getLiveDataByDepName(
    @Param('name') name: string,
  ): Promise<CovidData[] | string> {
    return await this.dataService.getLiveDataByDepartementName(name);
  }

  @Get('live/region/:name')
  async getLiveDataByRegName(
    @Param('name') name: string,
  ): Promise<CovidData[] | string> {
    return await this.dataService.getLiveDataByRegionName(name);
  }

  @Get('france-by-date/:date')
  async getDataFRByDate(
    @Param('date') date: string,
  ): Promise<Promise<CovidData[] | string>> {
    return await this.dataService.getDataFRByDate(date);
  }

  @Get('departements-by-date/:date')
  async getDataDepByDate(
    @Param('date') date: string,
  ): Promise<CovidData[] | string> {
    return await this.dataService.getDataDepartementByDate(date);
  }

  @Get('departement/:name')
  async getDataForOneDep(
    @Param('name') name: string,
  ): Promise<CovidData[] | string> {
    return await this.dataService.getDataByDepartementName(name);
  }

  @Get('departement/:name/:date')
  async getDataForOneDepByDate(
    @Param('name') name: string,
    @Param('date') date: string,
  ): Promise<CovidData[] | string> {
    return await this.dataService.getDataByDepartementNameByDate(name, date);
  }

  @Get('region/:name')
  async getDataByRegName(
    @Param('name') name: string,
  ): Promise<CovidData[] | string> {
    return this.dataService.getDataByRegionName(name);
  }

  @Get('region/:name/:date')
  async getDataByRegNameByDate(
    @Param('name') name: string,
    @Param('date') date: string,
  ): Promise<CovidData[] | string> {
    return await this.dataService.getDataByRegionNameByDate(name, date);
  }

  @Get('update')
  updateData(): void {
    return this.dataService.updateData();
  }
}
