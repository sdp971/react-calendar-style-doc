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

Cet élément permet d'afficher un calendrier en mois et jour.

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
export function CalendarCases({}) {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSelect = (event) => {
    if (event.target.id === "day") {
      setSelectedDate(
        new Date(
          currentYear,
          currentMonth,
          event.target.getAttribute("data-day")
        )
      );
    }
  };

  return (
    <section>
      <div className="header">
        <button onClick={prevMonth}>{" < "}</button>
        <p>
          {months[currentMonth]} {currentYear}
        </p>
        <button onClick={nextMonth}>{" > "}</button>
      </div>
      <div className="monthContainer" onClick={handleSelect}>
        {range(1, getNumberOfDaysInMonth(currentYear, currentMonth) + 1).map(
          (day, i) => (
            <p
              id="day"
              data-day={day}
              key={i}
              className={
                selectedDate?.getTime() ===
                new Date(currentYear, currentMonth, day).getTime()
                  ? "active"
                  : ""
              }
            >
              {day}
            </p>
          )
        )}
      </div>
    </section>
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
export default function WeekDaysCases({}) {
  return (
    <div className="wrapper-days">
      {english
        ? days.map((days, i) => <div key={i}>{days}</div>)
        : daysFr.map((days, i) => <div key={i}>{days}</div>)}
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
function InputDate({}) {
  const handleChange = (e) => {
    setValue(new Date(e.target.value));
  };

  const dateValue =
    value instanceof Date ? value.toISOString().split("T")[0] : value;

  return (
    <div>
      <input
        className="input"
        type="date"
        onChange={(e) => handleChange(e)}
        value={dateValue}
        style={styleElement}
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
function SaisonImg({
}) {


  const monthDayFormat = (dateCurrent) => {
    const maDate = new Date(dateCurrent);
    return (maDate?.getMonth() + 1) * 100 + maDate?.getDate();
  };
  const setSaisons = (dateSais) => {
    if (
      monthDayFormat(dateSais) >= monthDayFormat(saisDate.printemt) &&
      monthDayFormat(dateSais) < monthDayFormat(saisDate.ete)
    ) {
      return urlsImg.img1;
    }
    if (
      monthDayFormat(dateSais) >= monthDayFormat(saisDate.ete) &&
      monthDayFormat(dateSais) < monthDayFormat(saisDate.automne)
    ) {
      return urlsImg.img2;
    }

    if (....)
  };
  return (
    <div>
      <Image src={setSaisons(date)} style={styleElement} />
    </div>
  );
}
```

<br/><br/>

### GridDay

<br/>

Cet élément permet d'afficher une journee de la semaine et les avoir toutes les heures de la journee selectionnee
l'utilisateur a le choix passer d'une journee a une autre en faisant appel au composant BTN



