import { update } from "./update.js";

// Data renderen voor detailpagina
export const render = {
  renderOverview: function(data) {
    let i = 0;
    console.log(data);
    // Haalt de schilderijen op voor de overzichtspagina
    data.artObjects.map(function(x) {
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

  renderDetail: function(id) {
    console.log("jeej");
    // Tomas geholpen voor de filter en reduce
    console.log(data);
    // update.removeOldClass();
    const painting = data.artObjects
      .filter(obj => obj.id == id)
      .reduce(obj => obj);

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
