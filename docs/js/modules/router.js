import { render } from "./render.js";
import { update } from "./update.js";

// Routen
// Bron: http://projects.jga.me/routie/
export const router = {
  handle: function (art) {
    routie({
      // Alle data renderen (overview)
      "": () => {
        render.renderOverview(art);
      },
      // Naar detail pagina (als hierop geklikt wordt)
      "painting/:id": (id) => {
        update.updateUI(id);
      },
    });
  },
};
