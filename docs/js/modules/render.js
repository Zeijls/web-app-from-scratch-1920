import { update } from "./update.js";

// Data renderen voor detailpagina
export const render = {
  renderOverview: function(art) {
    let i = 0;
    console.log(art);
    // Haalt de schilderijen op voor de overzichtspagina
    art.map(function(x) {
      rijksContainer.insertAdjacentHTML(
        "beforeend",
        `
         <li>
            <a href="#painting-${x.id}" > <img src=${x.webImage.url} alt=""> </a>
         </li>`
      );
      i++;
    });
  },

  renderDetail: function(art, id) {
    const activeSection = document.querySelector("[data-route=painting]");
    console.log("jeej");
    console.log(art);
    // update.removeOldClass();
    // acc = accumulator (getelde waarde)
    // cur = currentValue (huidige waarde)
    // In de berekening acc = cur.id zijn gelijk aan elkaar, maar als id niet kan vinden behoudt hij de vorige waarde
    // Bas heeft hiermee geholpen
    // Bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    const painting = art.reduce(
      (acc, cur) => (acc = cur.id === id ? cur.id : acc)
    );

    // Schilderij, titel en productieplaats ophalen
    console.log(painting);
    activeSection.insertAdjacentHTML(
      "beforeend",
      `
        <img src=${painting.webImage.url} alt="">
        <div>
        <section>${painting.title}</section>
        <section>${painting.productionPlaces}</section>
        <a href=""> Terug naar overzicht</a>
        </div>
        `
    );
  }
};
