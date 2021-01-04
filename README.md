# CoronavirusAPI-France
API permettant de récupérer et d'exploiter les données sur le Coronavirus en France actualisées chaque jours a 20H pour chaque département et gleobalement pour la France entière via de simple requetes GET qui enverront une réponse en JSON.

## GET Les données globales connues a l'heure actuelle pour la France / GET the global data knows at the actual hour for France

**GET** "https://coronavirusapi-france.now.sh/FranceLiveGlobalData" 

##### REMARQUE : les données sont actualisées chaque jours aux alentours de 20h si vous requetez les données pour le jour meme avant 20h vous aurez les données du jour d'avant mais ne vous inquiétez pas tout ceci est automatiquement géré par l'API ;)

##### NOTE : The data are actualised at 8pm everyday if you request data for today before 8pm you'll get the data for the previous date but don't worry this is handling automatically by the API ;).

**EX:** Si vous faites cette requete le 28/04/2020 avant 20h l'API vous fournira les données du 27/04/2020.

**EX:** If you request /FranceLiveGlobalData at 28/04/2020 before 8pm the api will give you the data for the 27/04/2020.

**Résulats/Results :** 
```javascript
{
    "FranceGlobalLiveData": [
        {
            "date": "2020-04-27",
            "source": {
                "nom": "Ministère des Solidarités et de la Santé"
            },
            "sourceType": "ministere-sante",
            "casConfirmes": 128339,
            "deces": 14497,
            "decesEhpad": 8796,
            "hospitalises": 28055,
            "reanimation": 4608,
            "gueris": 45513,
            "casEhpad": 67730,
            "casConfirmesEhpad": 30227,
            "casPossiblesEhpad": 37503,
            "nom": "France",
            "code": "FRA"
        },
        {
            "code": "FRA",
            "nom": "France",
            "date": "2020-04-27",
            "hospitalises": 27954,
            "reanimation": 4526,
            "deces": 14486,
            "gueris": 45506,
            "source": {
                "nom": "OpenCOVID19-fr"
            },
            "sourceType": "opencovid19-fr"
        }
    ]
} 
```
.

## GET Les données connues à l'heure actuelle pour un département précis // Get the data knows at the actual hour for one departement.

**GET** "https://coronavirusapi-france.now.sh/LiveDataByDepartement?Departement={departement}"

**EX:** "https://coronavirusapi-france.now.sh/LiveDataByDepartement?Departement=Rhône"

[Liste des départements](https://www.regions-et-departements.fr/departements-francais)

##### REMARQUE : les données sont actualisées chaque jours aux alentours de 20h si vous requetez les données pour le jour meme avant 20h vous aurez les données du jour d'avant mais ne vous inquiétez pas tout ceci est automatiquement géré par l'API ;)

##### NOTE : The data are actualised at 8pm everyday if you request data for today before 8pm you'll get the data for the previous date but don't worry this is handling automatically by the API ;).

**EX:** Si vous faites cette requete le 28/04/2020 avant 20h l'api vous fournira les données du 27/04/2020.

**EX:** If you request /FranceLiveGlobalData at 28/04/2020 before 8pm the api will give you the data for the 27/04/2020.

**Résultats/Résults :**
```javascript
{
    "LiveDataByDepartement": [
        {
            "code": "DEP-69",
            "nom": "Rhône",
            "date": "2020-04-27",
            "hospitalises": 1151,
            "reanimation": 175,
            "deces": 481,
            "gueris": 1684,
            "source": {
                "nom": "Santé publique France Data"
            },
            "sourceType": "sante-publique-france-data"
        }
    ]
}
```


## GET Toutes les données connues à l'heure actuelles peu importe le département // GET all live data for any departement.

**GET** "https://coronavirusapi-france.now.sh/AllLiveData" 

##### REMARQUE : les données sont actualisées chaque jours aux alentours de 20h si vous requetez les données pour le jour meme avant 20h vous aurez les données du jour d'avant mais ne vous inquiétez pas tout ceci est automatiquement géré par l'API ;)

##### NOTE : The data are actualised at 8pm everyday if you request data for today before 8pm you'll get the data for the previous date but don't worry this is handling automatically by the API ;).

EX: Si vous faites cette requete 28/04/2020 avant 20h l'api vous fournira les données du 27/04/2020.

EX: If you request /AllLiveData at 28/04/2020 before 8pm the api will give you the data for the 27/04/2020.

Aujourd'hui : 28/04/2020 11h.
Today : 28/04/2020 11am.

**Résultats/Results:**
```javascript
{
    "allLiveFranceData": [
        {
            "code": "DEP-01",
            "nom": "Ain",
            "date": "2020-04-27",
            "hospitalises": 162,
            "reanimation": 18,
            "deces": 75,
            "gueris": 237,
            "source": {
                "nom": "Santé publique France Data"
            },
            "sourceType": "sante-publique-france-data"
        },
        {
            "code": "DEP-02",
            "nom": "Aisne",
            "date": "2020-04-27",
            "hospitalises": 288,
            "reanimation": 38,
            "deces": 200,
            "gueris": 581,
            "source": {
                "nom": "Santé publique France Data"
            },
            "sourceType": "sante-publique-france-data"
        },    
........... 121

```
## GET Toute les données disponibles pour une date précise // GET all the data at a choosen date.

**GET** "https://coronavirusapi-france.now.sh/AllDataByDate?date={date}"

Le format de la date doit etre 2020-mm-dd.// Date format have to be 2020-mm-dd.

**EX**: 2020-04-19

**GET** "https://coronavirusapi-france.now.sh/AllDataByDate?date=2020-04-19"

**Résultats/Results :**
```javascript
{
    "allFranceDataByDate": [
        {
            "code": "DEP-01",
            "nom": "Ain",
            "date": "2020-04-19",
            "hospitalises": 172,
            "reanimation": 24,
            "deces": 60,
            "gueris": 183,
            "source": {
                "nom": "Santé publique France Data"
            },
            "sourceType": "sante-publique-france-data"
        },
        {
            "code": "DEP-02",
            "nom": "Aisne",
            "date": "2020-04-19",
            "hospitalises": 275,
            "reanimation": 41,
            "deces": 169,
            "gueris": 356,
            "source": {
                "nom": "Santé publique France Data"
            },
            "sourceType": "sante-publique-france-data"
        },
        {
            "code": "DEP-03",
            "nom": "Allier",
            "date": "2020-04-19",
            "hospitalises": 57,
            "reanimation": 18,
            "deces": 22,
            "gueris": 90,
            "source": {
                "nom": "Santé publique France Data"
            },
            "sourceType": "sante-publique-france-data"
        },
........ 

```

## GET Toutes les données disponibles pour un département précis peu importe la date // GET all the data for a departement at any date.

**GET** "https://coronavirusapi-france.now.sh/AllDataByDepartement?Departement={departement}"

**EX:** **GET** "https://coronavirusapi-france.now.sh/AllDataByDepartement?Departement=Rhône"

[Liste des départements](https://www.regions-et-departements.fr/departements-francais)

**Résultats/Results :**
```javascript
{
    "allDataByDepartement": [
        {
            "date": "2020-03-02",
            "source": {
                "nom": "ARS Auvergne-Rhône-Alpes",
                "url": "https://www.auvergne-rhone-alpes.ars.sante.fr/system/files/2020-03/200302_ARSARA_COVID-19_Point_Situation.pdf",
                "archive": "https://web.archive.org/web/20200321171945/https://www.auvergne-rhone-alpes.ars.sante.fr/system/files/2020-03/200302_ARSARA_COVID-19_Point_Situation.pdf"
            },
            "sourceType": "agences-regionales-sante",
            "nom": "Rhône",
            "code": "DEP-69",
            "casConfirmes": 4,
            "deces": 0
        },
        {
            "date": "2020-03-03",
            "source": {
                "nom": "ARS Auvergne-Rhône-Alpes",
                "url": "https://www.auvergne-rhone-alpes.ars.sante.fr/system/files/2020-03/200303_ARSARA_COVID-19_Point_Situation.pdf",
                "archive": "https://web.archive.org/web/20200321171859/https://www.auvergne-rhone-alpes.ars.sante.fr/system/files/2020-03/200303_ARSARA_COVID-19_Point_Situation.pdf"
            },
            "sourceType": "agences-regionales-sante",
            "nom": "Rhône",
            "code": "DEP-69",
            "casConfirmes": 4,
            "deces": 0
        },

......
```

### Le jeu de données Initiale provient de l'initiative OpenCOVID19-fr ###
[Le lien](https://www.data.gouv.fr/fr/organizations/opencovid19-fr/#datasets)

### Réalisation ###
[Florian Zemma Gailleton](linkedin.com/in/florian-zemma-gailleton-607031121) |
[Site Web](https://www.dev-enir.fr)
