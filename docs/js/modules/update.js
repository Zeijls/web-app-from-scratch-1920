import { render } from "./render.js";
import { api } from "./api.js";

// https://github.com/cmda-minor-web/web-app-from-scratch-1920/tree/master/examples
// update UI from route (hashchange)
// Class toevoegen en verwijderen
export const update = {
  updateUI: function(id) {
    // ID van schilderij ophalen
    let section = document.getElementById("painting");

    //Class wrapper wordt verwijderd (Zodat alleen detailpagina wordt weergegeven)
    let wrapper = document.querySelector(".wrapper");
    wrapper.remove();
    section.classList.remove("active");

    // Voegt class active toe, en haalt de data voor detailpagina op
    section.classList.add("active");
    api.getData().then(data => {
      const art = data.artObjects;
      render.renderDetail(art, id);
    });
  }
};
