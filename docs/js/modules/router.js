import { render } from "./render.js";
import { update } from "./update.js";
import { api } from "./api.js";

// Routen
// Bron: http://projects.jga.me/routie/
export const router = {
  handle: function() {
    routie({
      // Alle data renderen
      "": () => {
        console.log("hsadl");
        // render.renderDetail(data);
      },
      //
      "painting-:id": id => {
        console.log(id);
        // update.removeOldClass();
        update.updateUI(id);

        // render.renderDetail(api.getData());
      },
      Top: () => {
        // update.removeOldClass();
      }
    });
  }
};
