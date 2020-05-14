# Rembrandt van Rijn in het Rijksmuseum

## Web App From Scratch @cmda-minor-web 1819

<img width="1440" alt="Screenshot 2020-05-12 at 10 33 04" src="https://user-images.githubusercontent.com/45422060/81661193-0f11e100-943c-11ea-87ca-75fef4b14b73.png">
<img width="1440" alt="Screenshot 2020-05-12 at 10 33 12" src="https://user-images.githubusercontent.com/45422060/81661202-10dba480-943c-11ea-854f-37d3defd3934.png">
<img width="1440" alt="Screenshot 2020-05-12 at 10 33 21" src="https://user-images.githubusercontent.com/45422060/81661212-133dfe80-943c-11ea-8ff7-681a30f35173.png">

## Inhoudspagina

- [Live Demo](#Live-Demo)
- [To Do](#To-Do)
- [Beschrijving](#Beschrijving)
- [Leerdoelen](#Leerdoelen)
- [Gebruik](#Gebruiks)
- [API](#API)
- [Diagrams](#Diagrams)
- [Interactive Diagram](#Interactive-Diagram)
- [Wish List](#Wish-List)
- [Bronnen](#Bronnen)

## Live Demo

[Live Demo](https://zeijls.github.io/web-app-from-scratch-1920/)

## Opdracht

- Data moet vanuit een API worden gerenderd in de HTML
- De data uit de API wordt asynchroon opgehaald
- Voor het oog is er een overzichts en detailpagina met gebruik van een router (single page web app)
- De code is opgedeeld in modules
- De code visueel maken dmv een Actor Diagram en Interactive Diagram
- De applicatie bevat states
- De code is dynamisch

## Concept

Op de webapplicatie zijn alle schilderijen van het Rijksmuseum weergegeven. Het is mogelijk om in de collectie te filteren op de schilderijen van Rembrandt van Rijn. Zodra een schilderij wordt geselecteerd worden de details weergegeven. Als het ophalen van de schilderijen lang duurt is er een loadingstate aanwezig.

## De structuur

# Diagrams

<img width="698" alt="Screenshot 2020-05-14 at 11 27 58" src="https://user-images.githubusercontent.com/45422060/81917847-005f3180-95d6-11ea-980e-2299a779230c.png">

## Gebruik

Ga via de terminal naar de folder waar je het projet wilt plaatsen:

```
cd Pth/To/Folder
```

Clone de repository

```
    git clone https://github.com/Zeijls/web-app-from-scratch-1920.git
    cd web-app-from-scratch-1920
```

Na het clonen, open het `index.html` bestnd in je localhost.

## API

Ik gebruik de API van het Rijksmuseum. In deze API is een groot deel van de gehele collectie verzameld. Alle details van de schilerderijen worden hierin weergegeven. Vanwege copyright restricties zijn kunstwerken van de 20e en 21e eeuw niet toegevoegd.

Om gebruik te maken van de API van het Rijksmuseum heb je een key nodig. Deze kun je aanvragen bij de gevanceerde account instellingen op de site van het Rijksumseum. https://www.rijksmuseum.nl/en/rijksstudio/

Om bijvoorbeeld alleen de schilderijen van Rembrandt van Rijn weer te geven kun je de volgende endpoints gebruiken.

> const rijksAPI = baseURl + key + involvedMaker + maker;

Er blijven dan 9 schilderijen over. Voor de herkansing heb ik dit endpoint uit mijn project verwijderd. Je kunt wel filteren op de schilder Rembrandt door een button bovenaan de pagina. Het filter wordt toegepast door het volgende stukje code:

```js
// Filter Rembrandt van Rijn
// https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const rijnButton = document.querySelector(".vRijn");
rijnButton.addEventListener("click", getRijnData);

const artData = art;
function getRijnData() {
  const rijnData = artData.filter((item) => {
    return item.principalOrFirstMaker === "Rembrandt van Rijn";
  });

  removePaintings();

  rijnData.map((x) => {
    rijksContainer.insertAdjacentHTML(
      "beforeend",
      `
             <li>
                <a href="#painting/${x.id}" > <img src=${x.webImage.url} alt=""> </a>
             </li>`
    );
  });
}

function removePaintings() {
  let element = document.getElementById("rijksContainer");
  // While
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}
```

## To Do

Week 1

- [x] 2. Readme afmaken
- [x] 3. Loading data asynchronously from an API
- [x] MAP
- [x] FILTER
- [x] REDUCE
- [x] Issues verwerken

Week 2

- [x] Actor diagram.
- [x] Interactive diagram
- [x] Refactor code
- [x] Key aanpassen in url (Issue Marten)

Week 3

- [x] Functies opdelen in modules
- [x] States toevoegen (Feedback loading)
- [x] 3. Reflect on work (Tuesday)

- [x] Nadelen client side renderen van HTML kunnen benoemen (Zoeken in aantekeningen)
- [x] Criteria nog goed doorlezen
- [x] Beoordeling voorbereiden
- [x] Best practices doorlezen

## Wish List

- [x] Schilderijen van Rembrandt van Rijn ook in een filter zetten

## Bronnen

- [Promise Then](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then)
- [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [Routen](http://projects.jga.me/routie/)
- [Update UI from route](https://github.com/cmda-minor-web/web-app-from-scratch-1920/tree/master/examples)
- [Insert Adjacent HTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)
- [Inner HTML](https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
- [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [Filter](https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
- [While](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)

## Credits

- Marjolein Aardewijn, heeft me geholpen met het werkend krijgen van de loading state
- Joost Faber, zijn introductie les over de routie heeft me geholpen het te begrijpen en toe te passen
- Robin Stut, heeft mij geholpen met de promise, hij gaf een error aan de de promise niet resolved was, terwijl de console dit wel aangaf.
- Joost Faber, hij heeft mij geholpen met het refactoren van mijn routie
- Robin Stut, heeft mij tijdens een nude klasje uitgelegd hoe je adv. insertAdjacentHTML de data die je wilt kunt renderen
- Bas, heeft mij geholpen met de berekening in de reduce
