import { api } from "./api.js";
import { render } from "./render.js";
import { router } from "./router.js";

export const app = {
  // Promise then
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
  init: function () {
    // Loading state
    render.loader("overview");
    // data ophalen
    api.getData().then((data) => {
      // Loading state verwijderen
      render.remove();
      // Overview renderen
      router.handle(data.artObjects);
    });
  },
};
