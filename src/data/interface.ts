export interface CovidDataDep {
  dep: number;
  date: string;
  reg: number;
  lib_dep: string;
  lib_reg: string;
  tx_pos: number;
  tx_incid: number;
  TO: number;
  R: any;
  hosp: number;
  rea: number;
  rad: number;
  dchosp: number;
  reg_rea: number;
  incid_hosp: number;
  incid_rea: number;
  incid_rad: number;
  incid_dchosp: number;
  reg_incid_rea: number;
  pos: number;
  pos_7j: number;
  cv_dose1: any;
}

export interface CovidDataFr {
  date: string;
  tx_pos: number;
  tx_incid: number;
  TO: number;
  R: null;
  hosp: number;
  rea: number;
  rad: number;
  dchosp: number;
  incid_hosp: number;
  incid_rea: number;
  incid_rad: number;
  incid_dchosp: number;
  pos: number;
  pos_7j: number;
  cv_dose1: number;
  conf: number;
  conf_j1: number;
  esms_dc: number;
  dc_tot: number;
  esms_cas: number;
}
