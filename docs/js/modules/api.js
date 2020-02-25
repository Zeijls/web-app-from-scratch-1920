const rijksAPI =
  "https://www.rijksmuseum.nl/api/nl/collection?key=uc0ncT1V&involvedMaker=Rembrandt+van+Rijn";
const rijksContainer = document.getElementById("rijksContainer");
const painting = document.getElementById("painting");
/*** Handle routes -> refactor into module later ***/
const sections = document.querySelectorAll("section");
// let data = null;

// Fetch
// Bron: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
export const api = {
  getData: function() {
    return new Promise((resolve, reject) => {
      fetch(rijksAPI)
        .then(response => {
          return response.json();
        })
        .then(data => {
          resolve(data);
        })
        .catch(err => {
          reject(err);
        });
    });
    // return data;
  }
};

// export const api = {
//     getData: function() {
//       return new Promise((resolve, reject) => {
//         fetch(rijksAPI)
//           .then(response => {
//             return response.json();
//           })
//           .then(myJson => {
//             resolve(myJson);
//           });
//       });
//     }
//   };

// export const api = {
//     getData: function() {
//       return fetch(rijksAPI)
//         .then(response => {
//           return response.json();
//         })
//         .then(data => {
//           return data;
//         });
//     }
//   };
