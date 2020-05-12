const baseURl = "https://www.rijksmuseum.nl/api/nl/collection?key=";
const key = "uc0ncT1V";
const involvedMaker = "&involvedMaker=";
const makerRembrandt = "Rembrandt+van+Rijn";

const rijksAPI = baseURl + key;

// Fetch
// Bron: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
export const api = {
  getData: function () {
    console.log(rijksAPI);
    return new Promise((resolve, reject) => {
      // Data fetchen en omzetten in Json
      fetch(rijksAPI)
        .then((response) => {
          return response.json();
        })
        // Promise resolven
        .then((data) => {
          resolve(data);
        })
        // Als dit niet lukt, error
        .catch((err) => {
          reject(err);
        });
    });
  },
};
