import { update } from "./update.js";

// Data renderen voor detailpagina
export const render = {
  loader: function(element) {
    let elementId = document.getElementById(element);
    let loadingImage =
      '<div class="loading"><img src="./img/loading.gif" alt="loading"><p>Loading...</p></div>';
    elementId.insertAdjacentHTML("beforeend", loadingImage);
  },

  renderOverview: function(art) {
    let i = 0;
    // Haalt de schilderijen op voor de overzichtspagina
    art.map(function(x) {
      rijksContainer.insertAdjacentHTML(
        "beforeend",
        `
         <li>
            <a href="#painting/${x.id}" > <img src=${x.webImage.url} alt=""> </a>
         </li>`
      );
      i++;
    });
  },

  renderDetail: function(art, id) {
    const activeSection = document.querySelector("[data-route=painting]");
    console.log(art);
    console.log(id);
    // update.removeOldClass();
    // acc = accumulator (getelde waarde)
    // cur = currentValue (huidige waarde)
    // In de berekening acc = cur.id zijn gelijk aan elkaar, maar als id niet kan vinden behoudt hij de vorige waarde
    // Bas heeft hiermee geholpen
    // Bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    const painting = art.reduce(
      (acc, cur) => (acc = cur.id === id ? cur : acc)
    );
    console.log(painting);

    // Schilderij, titel en productieplaats ophalen
    activeSection.insertAdjacentHTML(
      "beforeend",
      `
        <img src=${painting.webImage.url} alt="">
        <div>
        <section>${painting.title}</section>
        <section>${painting.productionPlaces}</section>
        <section>${painting.principalOrFirstMaker}</section>
        <a href=""> Terug naar overzicht</a>
        </div>
        `
    );
  }
};
