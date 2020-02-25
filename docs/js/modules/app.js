import { api } from "./api.js";
import { render } from "./render.js";
import { router } from "./router.js";
// // Overzichtspagina
export const app = {
  init: function() {
    const activeSection = document.querySelector("[data-route=painting]");

    api.getData().then(value => {
      render.renderOverview(value);
      router.handle();
    });

    // const fetchData = new Promise(function(resolve, reject) {
    //   resolve(api.getData());
    // });

    // fetchData.then(function(value) {
    //   console.log(value);
    //   // expected output: "Success!"
    //   render.renderOverview(value);
    //   router.handle();
    // });
  }
};
