import { render } from "./render.js";
import { update } from "./update.js";
import { api } from "./api.js";

// Routen
// Bron: http://projects.jga.me/routie/
export const router = {
  handle: function() {
    routie({
      // Alle data renderen
      "": () => {},
      // Een schilderij renderen
      "painting/:id": id => {
        console.log(id);
        update.updateUI(id);
      }
    });
  }
};
