import { CovidData } from './interface';
import { DataService } from './data.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('data')
export class DataController {
  constructor(private dataService: DataService) {}

  @Get('live/france')
  getLiveData(): CovidData[] | string {
    return this.dataService.getLiveData();
  }

  @Get('live/departements')
  getLiveDataByDep(): CovidData[] | string {
    return this.dataService.getLiveDataForAllDepartement();
  }

  @Get('live/departement/:name')
  getLiveDataByDepName(@Param('name') name: string): CovidData[] | string {
    return this.dataService.getLiveDataByDepartementName(name);
  }

  @Get('live/region/:name')
  getLiveDataByRegName(@Param('name') name: string): CovidData[] | string {
    return this.dataService.getLiveDataByRegionName(name);
  }

  @Get('france-by-date/:date')
  getDataFRByDate(@Param('date') date: string): CovidData[] | string {
    return this.dataService.getDataFRByDate(date);
  }

  @Get('departements-by-date/:date')
  getDataDepByDate(@Param('date') date: string): CovidData[] | string {
    return this.dataService.getDataDepartementByDate(date);
  }

  @Get('departement/:name')
  getDataForOneDep(@Param('name') name: string): CovidData[] | string {
    return this.dataService.getDataByDepartementName(name);
  }

  @Get('departement/:name/:date')
  getDataForOneDepByDate(
    @Param('name') name: string,
    @Param('date') date: string,
  ): CovidData[] | string {
    return this.dataService.getDataByDepartementNameByDate(name, date);
  }

  @Get('region/:name')
  getDataByRegName(@Param('name') name: string): CovidData[] | string {
    return this.dataService.getDataByRegionName(name);
  }

  @Get('region/:name/:date')
  getDataByRegNameByDate(
    @Param('name') name: string,
    @Param('date') date: string,
  ): CovidData[] | string {
    return this.dataService.getDataByRegionNameByDate(name, date);
  }

  @Get('update')
  updateData(): void {
    return this.dataService.updateData();
  }
}
