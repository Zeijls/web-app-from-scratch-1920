import { render } from "./render.js";
import { api } from "./api.js";

// https://github.com/cmda-minor-web/web-app-from-scratch-1920/tree/master/examples
// update UI from route (hashchange)
// Class toevoegen en verwijderen
export const update = {
  updateUI: function(route) {
    let section = document.getElementById("paintingDetail");
    // active class wordt verwijderd voordat er een nieuwe class wordt toegevoegd
    // removeOldClass();
    // console.log("jeej");
    console.log(section);
    //Class wrapper wordt verwijderd
    let wrapper = document.querySelector(".wrapper");
    console.log(wrapper);
    wrapper.remove();
    // Voegt class active toe aan wrapper (overzichtspagina)
    // const activeSection = document.querySelector(".wrapper");

    section.classList.add("active");

    render.renderDetail(api.getData());
  },

  removeOldClass: function() {
    activeSection.innerHTML = "";
    console.log("pipo");
    sections.forEach(section => {
      section.classList.remove("active");
    });
  }
};
