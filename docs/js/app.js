const rijksAPI =
  "https://www.rijksmuseum.nl/api/nl/collection?key=uc0ncT1V&involvedMaker=Rembrandt+van+Rijn";
const rijksContainer = document.getElementById("rijksContainer");
const painting = document.getElementById("painting");
/*** Handle routes -> refactor into module later ***/
const sections = document.querySelectorAll("section");
let data = null;

// Fetch
// Bron: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
fetch(rijksAPI)
  .then(response => {
    return response.json();
  })
  .then(myJson => {
    console.log(myJson);
    data = myJson;
    init(data);
  });

// Overzichtspagina
function init(data) {
  const activeSection = document.querySelector("[data-route=painting]");
  console.log(activeSection);
  function render() {
    let i = 0;
    // Haalt de schilderijen op voor de overzichtspagina
    data.artObjects.map(function(x) {
      rijksContainer.insertAdjacentHTML(
        "beforeend",
        `
     <li>
        <a href="#painting-${x.id}" > <img src=${x.webImage.url} alt=""> </a>
     </li>`
      );
      i++;
    });
  }

  // Data renderen voor detailpagina
  function renderDetail(id) {
    // Tomas geholpen voor de filter en reduce
    console.log(data);
    const painting = data.artObjects
      .filter(obj => obj.id == id)
      .reduce(obj => obj);

    // Schilderij, titel en productieplaats ophalen
    console.log(painting);
    activeSection.insertAdjacentHTML(
      "beforeend",
      `
    <img src=${painting.webImage.url} alt="">
    <div>
    <section>${painting.title}</section>
    <section>${painting.productionPlaces}</section>
    <a href=""> Terug naar overzicht</a>
    </div>
    `
    );
  }

  // Routen
  // Bron: http://projects.jga.me/routie/
  routie({
    // Alle data renderen
    "": () => {
      render(data);
    },
    //
    "painting-:id": id => {
      console.log(id);
      updateUI(id);
    },
    Top: () => {
      removeOldClass();
    }
  });

  // https://github.com/cmda-minor-web/web-app-from-scratch-1920/tree/master/examples
  // update UI from route (hashchange)
  // Class toevoegen en verwijderen
  function updateUI(route) {
    // active class wordt verwijderd voordat er een nieuwe class wordt toegevoegd
    removeOldClass();
    //Class wrapper wordt verwijderd
    document.querySelector(".wrapper").remove();

    // Voegt class active toe aan wrapper (overzichtspagina)
    console.log(document.querySelector(".wrapper"));
    activeSection.classList.add("active");
    renderDetail(route);
  }

  function removeOldClass() {
    activeSection.innerHTML = "";
    sections.forEach(section => {
      section.classList.remove("active");
    });
  }
}
