import { render } from "./render.js";
import { api } from "./api.js";

// https://github.com/cmda-minor-web/web-app-from-scratch-1920/tree/master/examples
// update UI from route (hashchange)
// Class toevoegen en verwijderen
export const update = {
  updateDetail: function (id) {
    // ID van schilderij ophalen
    let section = document.getElementById("painting");

    //Children class wrapper worden verwijderd (Zodat alleen detailpagina wordt weergegeven, en niet het gehele overzicht)
    let wrapper = document.querySelector(".wrapper");

    // While
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
    while (wrapper.firstChild) {
      wrapper.removeChild(wrapper.firstChild);
    }

    section.classList.remove("active");

    // Voegt class active toe, en haalt de data voor detailpagina op
    section.classList.add("active");
    api.getData().then((data) => {
      const art = data.artObjects;
      render.renderDetail(art, id);
    });
  },
};
