import { render } from "./render.js";
import { update } from "./update.js";
// import { api } from "./api.js";

// Routen
// Bron: http://projects.jga.me/routie/
export const router = {
  handle: function(art) {
    routie({
      // Alle data renderen
      "": () => {
        render.renderOverview(art);
      },
      // Een schilderij renderen
      "painting/:id": id => {
        console.log(id);
        update.updateUI(id);
      }
    });
  }
};
