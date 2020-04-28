const express = require("express");
const app = express();
var async  = require('express-async-await')
var fetch = require('node-fetch')
var moment = require('moment');
var cors = require('cors')



const port = 5000;

// Body parser
app.use(cors())
app.use(express.urlencoded({ extended: false }));

// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is booming on port 5000
Visit http://localhost:5000`);
});

app.get("/", (req, res) => {
    res.send("Bienvenue sur l'API CoronavirusFR-Api");
  });
  
  /* GET All Data // Toute les données disponibles */

app.get('/', function(req, res, next) {
 
    res.send("Bienvenue sur l'API coronavirusFranceAPI")
  });
  
  app.get('/AllData', function(req, res, next) {
    async function getAllData() {
      let franceData;
      allData = await fetch("https://raw.githubusercontent.com/opencovid19-fr/data/master/dist/chiffres-cles.json")
        .then(allData=>allData = allData.json())
        res.json({allData})
    }
    getAllData()
  });
  
  // GET all data from a date // Avoir toute les données a une date précise.
  
  app.get("/AllDataByDate", function(req, res, next) {
    let dateSelected = req.query.date;
    async function getAllDataByDate () {
      allFranceDataByDate = await fetch("https://raw.githubusercontent.com/opencovid19-fr/data/master/dist/chiffres-cles.json")
        .then(allFranceDataByDate=>allFranceDataByDate.json())
        .then(allFranceDataByDate=>allFranceDataByDate = allFranceDataByDate.filter(element=>element.date === dateSelected))
        res.json({allFranceDataByDate})
        console.log(allFranceDataByDate.length)
      }
    getAllDataByDate()
    
  });
  
  // GET all the actual data  / Toute les donées actuelles.
  
  app.get("/AllLiveData", function(req, res, next) {
  
    let yesterday = new Date(new Date().setDate(new Date().getDate()-1));
    let yesterdayToiso = yesterday.toISOString();
    let yesterdayFormatToFind = yesterdayToiso.substr(0,10);
  
    let dateToResearch;
  
    let todayActualDateOnMillisecond = Date.now();
    let todayAtNine = moment().format('YYYY-MM-DDT20:10:00.sssZ');
    let todayAtNineOnMillisecond = new Date(todayAtNine).getTime();
  
    let todayDate = new Date();
    let todayDateToIso = todayDate.toISOString();
    let todayDateToResearch = todayDateToIso.substr(0,10);
  
  
    if(todayActualDateOnMillisecond < todayAtNineOnMillisecond){
      dateToResearch = yesterdayFormatToFind
    }else{
      dateToResearch = todayDateToResearch
    }
  
    async function getAllLiveData () {
      allLiveFranceData = await fetch("https://raw.githubusercontent.com/opencovid19-fr/data/master/dist/chiffres-cles.json")
        .then(allLiveFranceData=>allLiveFranceData.json())
        .then(allLiveFranceData=>allLiveFranceData = allLiveFranceData.filter(element=>element.date === dateToResearch))
        res.json({allLiveFranceData})
        console.log(allLiveFranceData.length)
      }
    getAllLiveData()
    
  });
  
  // GET Global live data for France // Données globales actuelles en France .
  
  app.get("/FranceLiveGlobalData", function(req, res, next) {
  
    let yesterday = new Date(new Date().setDate(new Date().getDate()-1));
    let yesterdayToiso = yesterday.toISOString();
    let yesterdayFormatToFind = yesterdayToiso.substr(0,10);
  
    let dateToResearch;
  
    let todayActualDateOnMillisecond = Date.now();
    let todayAtNine = moment().format('YYYY-MM-DDT20:10:00.sssZ');
    let todayAtNineOnMillisecond = new Date(todayAtNine).getTime();
  
    let todayDate = new Date();
    let todayDateToIso = todayDate.toISOString();
    let todayDateToResearch = todayDateToIso.substr(0,10);
  
  
    if(todayActualDateOnMillisecond < todayAtNineOnMillisecond){
      dateToResearch = yesterdayFormatToFind
    }else{
      dateToResearch = todayDateToResearch
    }
  
    async function getFranceGlobalLiveData () {
      FranceGlobalLiveData = await fetch("https://raw.githubusercontent.com/opencovid19-fr/data/master/dist/chiffres-cles.json")
        .then(FranceGlobalLiveData=>FranceGlobalLiveData.json())
        .then(FranceGlobalLiveData=>FranceGlobalLiveData = FranceGlobalLiveData.filter(element=>element.date === dateToResearch && element.code === "FRA"))
        res.json({FranceGlobalLiveData})
        console.log(FranceGlobalLiveData.length)
      }
    getFranceGlobalLiveData()
    
  });
  
  app.get("/FranceGlobalDataByDate", function(req, res, next) {
    let dateSelected = req.query.date;
    async function getFranceGlobalDataByDate () {
      FranceGlobalDataByDate = await fetch("https://raw.githubusercontent.com/opencovid19-fr/data/master/dist/chiffres-cles.json")
      .then(FranceGlobalDataByDate=>FranceGlobalDataByDate.json())
      .then(FranceGlobalDataByDate=>FranceGlobalDataByDate = FranceGlobalDataByDate.filter(element=>element.date === dateSelected && element.code === "FRA"))
      res.json({FranceGlobalDataByDate})
      console.log(FranceGlobalDataByDate.length)
    }
    getFranceGlobalDataByDate()
  });
  
  // GET all actual for a departement // Toutes les données actuelles pour un département.
  
  app.get("/LiveDataByDepartement", function(req, res, next) {
    let DepartementSelected = req.query.Departement; 
  
    let yesterday = new Date(new Date().setDate(new Date().getDate()-1));
    let yesterdayToiso = yesterday.toISOString();
    let yesterdayFormatToFind = yesterdayToiso.substr(0,10);
  
    let dateToResearch;
  
    let todayActualDateOnMillisecond = Date.now();
    let todayAtNine = moment().format('YYYY-MM-DDT20:10:00.sssZ');
    let todayAtNineOnMillisecond = new Date(todayAtNine).getTime();
  
    let todayDate = new Date();
    let todayDateToIso = todayDate.toISOString();
    let todayDateToResearch = todayDateToIso.substr(0,10);
  
  
    if(todayActualDateOnMillisecond < todayAtNineOnMillisecond){
      dateToResearch = yesterdayFormatToFind
    }else{
      dateToResearch = todayDateToResearch
    }
  
  async function getLiveDataByDepartement () {
  
    LiveDataByDepartement = await fetch("https://raw.githubusercontent.com/opencovid19-fr/data/master/dist/chiffres-cles.json")
      .then(LiveDataByDepartement=>LiveDataByDepartement.json())
      .then(LiveDataByDepartement=>LiveDataByDepartement = LiveDataByDepartement.filter(element=>element.date === dateToResearch && element.nom === DepartementSelected))
      res.json({LiveDataByDepartement})
      console.log(LiveDataByDepartement.length)
    }
  getLiveDataByDepartement()
  
  });
  
  // GET all data for one departement // Toute les données disponibles pour un département.
  
  app.get("/AllDataByDepartement", function(req, res, next) {
    let DepartementSelected = req.query.Departement;
    async function getAllDataByDepartement () {
      allDataByDepartement = await fetch("https://raw.githubusercontent.com/opencovid19-fr/data/master/dist/chiffres-cles.json")
        .then(allDataByDepartement=>allDataByDepartement.json())
        .then(allDataByDepartement=>allDataByDepartement = allDataByDepartement.filter(element=>element.nom === DepartementSelected))
        res.json({allDataByDepartement})
        console.log(allDataByDepartement.length)
      }
    getAllDataByDepartement()
    
  });