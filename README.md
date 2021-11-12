# CoronavirusAPI-France
API permettant de récupérer et d'exploiter les données sur le Coronavirus en France actualisées chaque jours a Minuit pour chaque départements et globalement pour la France entière via de simple requetes GET qui enverront une réponse en JSON.

### Le jeu de données initial provient de Santé Publique France ###
[Le lien](https://www.data.gouv.fr/fr/datasets/synthese-des-indicateurs-de-suivi-de-lepidemie-covid-19/)

### Réalisation ###
[Florian Zemma Gailleton](https://www.linkedin.com/in/florian-zemma-gailleton-607031121) 

##### REMARQUE : les données sont actualisées chaque jours a minuit si l'API ne trouve pas les données pour le jour même elle vous fournira celle du jour d'avant 
##### NOTE : The data are updated at midnigth everyday, if the API doesn't have yet the data she will send you yesterday's data automatically.

##### Le format de la date doit être au format français DD/MM/YYYY // Date format have to be the french format DD/MM/YYYY.
**EXEMPLE**: 11-10-2021

## GET Les données globales connues a l'heure actuelle pour la France / GET the global data knows at the actual hour for France

**GET** "https://coronavirusapifr.herokuapp.com/data/live/france" 

**Résulats/Results :** 
```javascript
[
  {
    "date": "2021-11-11",
    "tx_pos": null,
    "tx_incid": null,
    "TO": 0.226374060893634,
    "R": null,
    "rea": 1145,
    "hosp": 6952,
    "rad": 430063,
    "dchosp": 91147,
    "incid_rea": 35,
    "incid_hosp": 212,
    "incid_rad": 146,
    "incid_dchosp": 17,
    "conf": 7256643,
    "conf_j1": 12603,
    "pos": null,
    "esms_dc": 26897,
    "dc_tot": 118044,
    "pos_7j": null,
    "cv_dose1": null,
    "esms_cas": 218906
  }
]
```

## GET Données globales pour la FRANCE pour une date précise // GET global data for FRANCE at a given date.

**ROUTE** "https://coronavirusapifr.herokuapp.com/data/france-by-date/:DATE"

Le format de la date doit être au format français DD/MM/YYYY // Date format have to be the french format DD/MM/YYYY.

**EXEMPLE**: 11-10-2021

**GET** "https://coronavirusapifr.herokuapp.com/data/france-by-date/11-10-2021"

**Résultats/Results :**
```javascript
[
  {
    "date": "2021-10-11",
    "tx_pos": 1.04644469248643,
    "tx_incid": 44.4207736289036,
    "TO": 0.226374060893634,
    "R": 0.936604475208371,
    "rea": 1145,
    "hosp": 6729,
    "rad": 423734,
    "dchosp": 90204,
    "incid_rea": 58,
    "incid_hosp": 226,
    "incid_rad": 193,
    "incid_dchosp": 30,
    "conf": 7057631,
    "conf_j1": 1120,
    "pos": 6758,
    "esms_dc": 26864,
    "dc_tot": 117068,
    "pos_7j": 29813,
    "cv_dose1": null,
    "esms_cas": 218350
  }
]

```
## GET Les données détaillées par DÉPARTEMENT connues a l'heure ACTUELLE // GET all live data for any DEPARTMENT.

**GET** "https://coronavirusapifr.herokuapp.com/data/live/departements" 

**Résultats/Results:**
```javascript
[
  {
    "dep": 1,
    "date": "2021-11-11",
    "reg": 84,
    "lib_dep": "Ain",
    "lib_reg": "Auvergne et Rhône-Alpes",
    "tx_pos": null,
    "tx_incid": null,
    "TO": 0.182468694096601,
    "R": null,
    "hosp": 39,
    "rea": 4,
    "rad": 3048,
    "dchosp": 644,
    "reg_rea": 102,
    "incid_hosp": 0,
    "incid_rea": 0,
    "incid_rad": 0,
    "incid_dchosp": 0,
    "reg_incid_rea": 3,
    "pos": null,
    "pos_7j": null,
    "cv_dose1": null
  },
  {
    "dep": 2,
    "date": "2021-11-11",
    "reg": 32,
    "lib_dep": "Aisne",
    "lib_reg": "Hauts-de-France",
    "tx_pos": null,
    "tx_incid": null,
    "TO": 0.21689497716895,
    "R": null,
    "hosp": 50,
    "rea": 8,
    "rad": 4534,
    "dchosp": 1157,
    "reg_rea": 95,
    "incid_hosp": 1,
    "incid_rea": 0,
    "incid_rad": 0,
    "incid_dchosp": 0,
    "reg_incid_rea": 2,
    "pos": null,
    "pos_7j": null,
    "cv_dose1": null
  },   
...........]

```

## GET Les données connues à l'heure ACTUELLE pour un DÉPARTEMENT précis // Get the data knows at the moment for one DEPARTMENT.

**ROUTE** "https://coronavirusapifr.herokuapp.com/data/live/departement/:DEPARTEMENT"

**EXEMPLE:** "https://coronavirusapifr.herokuapp.com/data/live/departement/rhone"

[Liste des départements](https://www.regions-et-departements.fr/departements-francais)

**Résultats/Results :**
```javascript
[
  {
    "dep": 69,
    "date": "2021-11-11",
    "reg": 84,
    "lib_dep": "Rhône",
    "lib_reg": "Auvergne et Rhône-Alpes",
    "tx_pos": null,
    "tx_incid": null,
    "TO": 0.182468694096601,
    "R": null,
    "hosp": 144,
    "rea": 31,
    "rad": 16847,
    "dchosp": 3351,
    "reg_rea": 102,
    "incid_hosp": 8,
    "incid_rea": 0,
    "incid_rad": 8,
    "incid_dchosp": 1,
    "reg_incid_rea": 3,
    "pos": null,
    "pos_7j": null,
    "cv_dose1": null
  }
]
```

## GET Données détaillées par DÉPARTEMENTS pour une date précise // GET detailed data by DEPARTMENTS at a given date.

**ROUTE** "https://coronavirusapifr.herokuapp.com/data/departements-by-date/:DATE"

Le format de la date doit être au format français DD/MM/YYYY // Date format have to be the french format DD/MM/YYYY.

**EXEMPLE**: 11-10-2021

**GET** "https://coronavirusapifr.herokuapp.com/data/departements-by-date/11-10-2021"

**Résultats/Results :**
```javascript
[
  {
    "dep": 1,
    "date": "2021-10-11",
    "reg": 84,
    "lib_dep": "Ain",
    "lib_reg": "Auvergne et Rhône-Alpes",
    "tx_pos": 1,
    "tx_incid": 36.0755302874626,
    "TO": 0.175313059033989,
    "R": null,
    "hosp": 45,
    "rea": 4,
    "rad": 3033,
    "dchosp": 641,
    "reg_rea": 98,
    "incid_hosp": 1,
    "incid_rea": 0,
    "incid_rad": 0,
    "incid_dchosp": 0,
    "reg_incid_rea": 8,
    "pos": 58,
    "pos_7j": 237,
    "cv_dose1": null
  },
  {
    "dep": 2,
    "date": "2021-10-11",
    "reg": 32,
    "lib_dep": "Aisne",
    "lib_reg": "Hauts-de-France",
    "tx_pos": 0.559040934219517,
    "tx_incid": 17.1086398631309,
    "TO": 0.207762557077626,
    "R": null,
    "hosp": 38,
    "rea": 6,
    "rad": 4492,
    "dchosp": 1144,
    "reg_rea": 91,
    "incid_hosp": 2,
    "incid_rea": 1,
    "incid_rad": 0,
    "incid_dchosp": 0,
    "reg_incid_rea": 11,
    "pos": 21,
    "pos_7j": 90,
    "cv_dose1": null
  },
  .......]
```

## GET Toutes les données disponibles pour un DÉPARTEMENT précis // GET all the data for one DEPARTMENT.

**ROUTE** "https://coronavirusapifr.herokuapp.com/data/departement/:DEPARTEMENT"

**EXEMPLE:** "https://coronavirusapifr.herokuapp.com/data/departement/rhone"

[Liste des départements](https://www.regions-et-departements.fr/departements-francais)

**Résultats/Results :**
```javascript
[
  {
    "dep": 69,
    "date": "2020-03-18",
    "reg": 84,
    "lib_dep": "Rhône",
    "lib_reg": "Auvergne et Rhône-Alpes",
    "tx_pos": null,
    "tx_incid": null,
    "TO": 0.0626118067978533,
    "R": null,
    "hosp": 36,
    "rea": 8,
    "rad": 10,
    "dchosp": 0,
    "reg_rea": 35,
    "incid_hosp": null,
    "incid_rea": null,
    "incid_rad": null,
    "incid_dchosp": null,
    "reg_incid_rea": null,
    "pos": null,
    "pos_7j": null,
    "cv_dose1": null
  },
  {
    "dep": 69,
    "date": "2020-03-19",
    "reg": 84,
    "lib_dep": "Rhône",
    "lib_reg": "Auvergne et Rhône-Alpes",
    "tx_pos": null,
    "tx_incid": null,
    "TO": 0.132379248658318,
    "R": null,
    "hosp": 210,
    "rea": 33,
    "rad": 48,
    "dchosp": 12,
    "reg_rea": 79,
    "incid_hosp": 244,
    "incid_rea": 28,
    "incid_rad": 46,
    "incid_dchosp": 17,
    "reg_incid_rea": 44,
    "pos": null,
    "pos_7j": null,
    "cv_dose1": null
  },
  ....... ]
```

## GET Toutes les données disponibles pour un DÉPARTEMENT précis a une DATE précise // GET all the data for one DEPARTMENT at a given DATE.

**ROUTE** "https://coronavirusapifr.herokuapp.com/data/departement/:DEPARTEMENT/:DATE"

**EXEMPLE:** "https://coronavirusapifr.herokuapp.com/data/departement/rhone/10-11-2021"

[Liste des départements](https://www.regions-et-departements.fr/departements-francais)

**Résultats/Results :**
```javascript
[
  {
    "dep": 69,
    "date": "2021-11-10",
    "reg": 84,
    "lib_dep": "Rhône",
    "lib_reg": "Auvergne et Rhône-Alpes",
    "tx_pos": null,
    "tx_incid": null,
    "TO": 0.180679785330948,
    "R": null,
    "hosp": 145,
    "rea": 32,
    "rad": 16839,
    "dchosp": 3350,
    "reg_rea": 101,
    "incid_hosp": 16,
    "incid_rea": 5,
    "incid_rad": 9,
    "incid_dchosp": 1,
    "reg_incid_rea": 14,
    "pos": null,
    "pos_7j": null,
    "cv_dose1": 80.7
  }
]
```

## GET Toutes les données disponibles pour une RÉGION précise // GET all the data for one REGION.

**ROUTE** "// https://coronavirusapifr.herokuapp.com/data/region/:REGION"

**EXEMPLE:** "https://coronavirusapifr.herokuapp.com/data/region/occitanie"

[Liste des départements](https://www.regions-et-departements.fr/departements-francais)

**Résultats/Results :**
```javascript
[
  {
    "dep":9
    "date":"2020-03-18",
    "reg":76,
    "lib_dep":"Ariège",
    "lib_reg":"Occitanie",
    "tx_pos":null,
    "tx_incid":null,
    "TO":0.0822784810126582
    ,"R":null,
    "hosp":1,
    "rea":1,
    "rad":2,
    "dchosp":0,
    "reg_rea":39,
    "incid_hosp":null,
    "incid_rea":null,
    "incid_rad":null,
    "incid_dchosp":null,
    "reg_incid_rea":null,
    "pos":null,
    "pos_7j":null,
    "cv_dose1":null
   },
   {
    "dep":9,
    "date":"2020-03-19",
    "reg":76,
    "lib_dep":"Ariège",
    "lib_reg":"Occitanie",
    "tx_pos":null
    ,"tx_incid":null,
    "TO":0.124472573839662,
    "R":null,
    "hosp":1,
    "rea":1,
    "rad":2,
    "dchosp":0,
    "reg_rea":55,
    "incid_hosp":0,
    "incid_rea":0,
    "incid_rad":0,
    "incid_dchosp":0,
    "reg_incid_rea":29,
    "pos":null,
    "pos_7j":null,
    "cv_dose1":null
   },
   ........
]
```

## GET Toutes les données disponibles pour une RÉGION précis a une DATE précise // GET all the data for one REGION at a given DATE.

**ROUTE** "https://coronavirusapifr.herokuapp.com/data/region/:REGION/:DATE"

**EXEMPLE:** "https://coronavirusapifr.herokuapp.com/data/region/occitanie/10-11-2021"

[Liste des départements](https://www.regions-et-departements.fr/departements-francais)

**Résultats/Results :**
```javascript
[
  {
    "dep": 9,
    "date": "2021-11-10",
    "reg": 76,
    "lib_dep": "Ariège",
    "lib_reg": "Occitanie",
    "tx_pos": null,
    "tx_incid": null,
    "TO": 0.175105485232068,
    "R": null,
    "hosp": 9,
    "rea": 2,
    "rad": 560,
    "dchosp": 102,
    "reg_rea": 83,
    "incid_hosp": 0,
    "incid_rea": 0,
    "incid_rad": 0,
    "incid_dchosp": 0,
    "reg_incid_rea": 3,
    "pos": null,
    "pos_7j": null,
    "cv_dose1": 85.6
  },
  {
    "dep": 11,
    "date": "2021-11-10",
    "reg": 76,
    "lib_dep": "Aude",
    "lib_reg": "Occitanie",
    "tx_pos": null,
    "tx_incid": null,
    "TO": 0.175105485232068,
    "R": null,
    "hosp": 40,
    "rea": 5,
    "rad": 1536,
    "dchosp": 413,
    "reg_rea": 83,
    "incid_hosp": 2,
    "incid_rea": 0,
    "incid_rad": 1,
    "incid_dchosp": 0,
    "reg_incid_rea": 3,
    "pos": null,
    "pos_7j": null,
    "cv_dose1": 73.2
  },
  ........]
```

### Le jeu de données initial provient de Santé Publique France ###
[Le lien](https://www.data.gouv.fr/fr/datasets/synthese-des-indicateurs-de-suivi-de-lepidemie-covid-19/)

### Réalisation ###
[Florian Zemma Gailleton](https://www.linkedin.com/in/florian-zemma-gailleton-607031121) 
