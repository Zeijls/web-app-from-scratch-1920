import { api } from "./api.js";
import { render } from "./render.js";
import { router } from "./router.js";
// // Overzichtspagina
export const app = {
  init: function() {
    render.loader("overview");
    // setTimeout(
    api.getData().then(
      data => {
        render.remove();
        router.handle(data.artObjects);
      }
      //   6000
      // );
    );

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
