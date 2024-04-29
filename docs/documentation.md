<!-- ---
sidebar_position: 1
--- -->

# Présentation de la librairie

**Calendar-Style** est une librairie React **flexible** et **personnalisable** qui permet d'intégrer facilement un calendrier dynamique dans vos applications.<br/><br/> Vous avez le contrôle total sur l'apparence et le comportement du calendrier, ce qui vous permet de l'adapter parfaitement à vos besoins spécifiques.<br/><br/> Avec sa structure modulaire et sa documentation complète, l'intégration de "Calendar-Style" dans vos projets est simple et rapide.


## 📚 Sommaire

- Installation
- Utilisation
- Composants :
  - Description
  - Capture image
  - Props
  - Code

<br/><br/>

## 📦 Installation

Installation en exécutant la commande

```
npm i react-calendar-style
```

<br/><br/>

## 🚀 Utilisation

Exemple d'utilisation des composants:

```js
import CalendarCases from "./components/calendarCases/CalendarCases";

function App() {
  return (
    <>
      <CalendarCases
        language="fr"
        color="red"
        fontFamily="Roboto"
        backgroundColor="white"
      />
    </>
  );
}
```

<br/>

## ⚒️ Composants

### CalendarCases

<br/>

Cet élément permet d'afficher un calendrier en mois et jour, qui permet de sélectionner une date, nous retournant des données sous format JSON, afin de pouvoir utiliser l'information si besoin.

| Nom de la propriété | Description                                                | Valeur par défaut        | Exemple           |
| ------------------- | ---------------------------------------------------------- | ------------------------ | ----------------- |
| language            | indique si la langue utilisée est l'anglais ou le français | `fr`                     | `"fr"` ou `"eng"` |
| color               | contrôle la couleur du texte                               | couleur thème par défaut | `"black"`         |
| backgroundColor     | contrôle la couleur du fond                                | couleur thème par défaut | `"white"`         |
| fontFamily          | contrôle la police utilisée                                | police thème par défaut  | `"Arial"`         |
| theme               | contrôle le thème                                          | `Default`                | `Default`         |

<br/><br/>


<br/><br/>

### Code:

```js
import { CalendarCases } from "react-calendar-style";

function App() {
  return (
    <>
      <CalendarCases
        language="fr"
        color="red"
        fontFamily="Roboto"
        backgroundColor="white"
      />
    </>
  );
}
```

<br/><br/>

### WeekDaysCases

<br/>

Cet élément permet d'afficher les jours de la semaine en français ou en anglais en tenant compte du type de calendrier.
<br/><br/>

| Nom de la propriété | Description                                                | Valeur par défaut        | Exemple   |
| ------------------- | ---------------------------------------------------------- | ------------------------ | --------- |
| english             | indique si la langue utilisée est l'anglais ou le français | `false`                  | `true`    |
| color               | contrôle la couleur                                        | couleur thème par défaut | `"black"` |
| backgroundColor     | contrôle la couleur du fond                                | couleur thème par défaut | `white`   |
| fontFamily          | contrôle la police utilisée                                | police thème par défaut  | `Arial`   |
| theme               | contrôle le thème                                          | `Default`                | `Default` |

<br/><br/>

<br/><br/>

### Code:

```js
import { WeekDaysCases } from "react-calendar-style";

function App() {
  return (
    <div className="app">
      <WeekDaysCases />
    </div>
  );
}
```

### InputDate

<br/>

Cet élément permet de créer un champ où l’utilisateur peut saisir une date.
<br/>
Il permet à l’utilisateur de sélectionner facilement une date via un sélecteur de date: Il peut faire une recherche rapide pour acceder aux differents mois et années

<br/><br/>

| Nom de la propriété | Description                                                              | Valeur par défaut        | Exemple    |
| ------------------- | ------------------------------------------------------------------------ | ------------------------ | ---------- |
| language            | indique si la langue utilisée est l'anglais ("eng") ou le français ("fr) | `fr`                     | `eng`      |
| color               | contrôle la couleur                                                      | couleur thème par défaut | `"black"`  |
| backgroundColor     | contrôle la couleur du fond                                              | couleur thème par défaut | `white`    |
| fontFamily          | contrôle la police utilisée                                              | police thème par défaut  | `Arial`    |
| theme               | contrôle le thème                                                        | `Default`                | `Default`  |
| height              | contrôle la hauteur                                                      | couleur thème par défaut | `"200px"`  |
| widht               | contrôle la largeur                                                      | largeur thème par défaut | `"200px`   |
| border              | contrôle la bordure                                                      | bordure thème par défaut | `1 px S B` |
| border-Raduis       | contrôle de l'inclinaison de la bordure                                  | `Default`                | `5px`      |

<br/><br/>



<br/><br/>

### Code:

```js
import { InputDate } from "react-calendar-style";

function App() {
  const currentDate = new Date();
  const [date, setDate] = useState(currentDate);

  return (
    <div className="app">
      <InputDate
        value={date}
        setValue={setDate}
        height="40px"
        width="30%"
        background="white"
        color="green"
        fontFamily="Arial"
        border="3px solid grey"
        borderRadius="5px"
      />
    </div>
  );
}
```

<br/><br/>

### SaisonImg

<br/>
Cet élément permet d'afficher plusieurs images de manière alternée en fonction des saisons.
l'utilisateur a le choix de garder les images déjà prédéfinies ou de choisir ses propres images en important le dossier image dans son composant.

| Nom de la propriété | Description                             | Valeur par défaut        | Exemple    |
| ------------------- | --------------------------------------- | ------------------------ | ---------- |
| height              | contrôle la hauteur                     | couleur thème par défaut | `"400px"`  |
| widht               | contrôle la largeur                     | largeur thème par défaut | `"400px`   |
| border              | contrôle la bordure                     | bordure thème par défaut | `1 px S B` |
| border-Raduis       | contrôle de l'inclinaison de la bordure | `Default`                | `5px`      |
| theme               | contrôle le thème                       | `Default`                | `Default`  |
| date                | contrôle de l'image selon les dates     | dates selon les saisons  | `Hiver`    |
| theme               | contrôle le thème                       | `Default`                | `Default`  |

<br/><br/>



<br/><br/>

```js
import { InputDate, SaisonImg } from "react-calendar-style";
function App() {
  const currentDate = new Date();
  const [date, setDate] = useState(currentDate);

  return (
    <div className="app">
      <InputDate value={date} setValue={setDate} /> //utiliser InputDate pour la
      modification d'image
      <SaisonImg
        date={`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`}
        width="30%"
      />
    </div>
  );
}
```

<br/><br/>

### GridDay

<br/>

Cet élément permet d'afficher une journee de la semaine et les avoir toutes les heures de la journee selectionnee
l'utilisateur a le choix passer d'une journee a une autre en faisant appel au composant BTN

### Code:

```js
import { GrilleDay } from "react-calendar-style";

function App() {
  return (
    <div className="app">
      <GrilleDay />
    </div>
  );
}
```
<br/><br/>

### GrilleWeek

<br/>

Cet élément permet d'afficher les jours de la semaine et toutes les heures. L'utilisateur a le choix passer d'une semaine a une autre en faisant appel au composant Btn.


| Nom de la propriété | Description                             | Valeur par défaut        | Exemple    |
| ------------------- | --------------------------------------- | ------------------------ | ---------- |
| height              | contrôle la hauteur                     | `500px` | `"400px"`  |
| padding              | contrôle l'espacement intérieur                    | `5px 32px` | `5px 32px`   |
|value              | contrôle la date                    | `new Date()` | `new Date()` |
| setValue     | contrôle de de la date appelée | `date`                | `date`      |


### Code:

```js
import { GrilleWeek } from "react-calendar-style";

function App() {
  return (
    <div className="app">
      <GrilleWeek />
    </div>
  );
}
```
<br/><br/>


### Grille

<br/>

Cet élément permet de faire un switch avec le toggle(boutton Day et Week) entre les jours de la semaine et toutes les heures, ainsi que les une une journee avec les heures. <br/>Ce composant regroupe plusieurs composnat pour son bon fonctionnement: GridDay, GridWeek et Btn.

| Nom de la propriété | Description                             | Valeur par défaut        | Exemple    |
| ------------------- | --------------------------------------- | ------------------------ | ---------- |
| height              | contrôle la hauteur                     | `500px` | `"400px"`  |
|value              | contrôle la date                    | `new Date()` | `new Date()` |
| setValue     | contrôle de de la date appelée | `date`                | `date`      |


### Code:

```js
import { Grille } from "react-calendar-style";

function App() {
  return (
    <div className="app">
      <Grille />
    </div>
  );
}
```
<br/><br/>



