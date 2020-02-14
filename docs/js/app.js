const rijksAPI =
  "https://www.rijksmuseum.nl/api/nl/collection?key=uc0ncT1V&involvedMaker=Rembrandt+van+Rijn";
const rijksContainer = document.getElementById("rijksContainer");
/*** Handle routes -> refactor into module later ***/
const sections = document.querySelectorAll("section");

// Fetch
fetch(rijksAPI)
  .then(response => {
    return response.json();
  })

  .then(myJson => {
    console.log(myJson);
    render(myJson);
  });

function render(rijksData) {
  console.log(rijksData);
  console.log(rijksContainer);

  rijksData.artObjects.map(function(x) {
    rijksContainer.insertAdjacentHTML(
      "beforeend",
      `
       <li>
           <img src=${x.webImage.url} alt="">
       
       </li>`
    );
  });
}

// Titel en productieplaats
// <section>${x.title}</section>
// <section>${x.productionPlaces}</section>

// Routen
routie({
  vanGogh: () => {
    updateUI("vanGogh");
  },
  RembrandtvanRijn: () => {
    updateUI("RembrandtvanRijn");
  },
  Top: () => {
    removeTopBar();
  }
});

// https://github.com/cmda-minor-web/web-app-from-scratch-1920/tree/master/examples
// update UI from route (hashchange)

// Class toevoegen en verwijderen
function updateUI(route) {
  removeTopBar();
  activeSection = document.querySelector(`[data-route=${route}]`);
  console.log(activeSection);
  activeSection.classList.add("active");
}

function removeTopBar() {
  sections.forEach(section => {
    section.classList.remove("active");
  });
}
