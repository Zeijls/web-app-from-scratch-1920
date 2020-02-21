const rijksAPI =
  "https://www.rijksmuseum.nl/api/nl/collection?key=uc0ncT1V&involvedMaker=Rembrandt+van+Rijn";
const rijksContainer = document.getElementById("rijksContainer");
const painting = document.getElementById("painting");
/*** Handle routes -> refactor into module later ***/
const sections = document.querySelectorAll("section");
let data = null;

// Fetch
fetch(rijksAPI)
  .then(response => {
    return response.json();
  })
  .then(myJson => {
    console.log(myJson);
    data = myJson;
    init(data);
  });
function init(data) {
  const activeSection = document.querySelector("[data-route=painting]");
  console.log(activeSection);
  function render(rijksData) {
    // console.log(rijksData);
    // console.log(rijksContainer);
    let i = 0;
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

  function renderDetail(id) {
    console.log(data);
    const painting = data.artObjects
      .filter(obj => obj.id == id)
      .reduce(obj => obj);
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
    // activeSection.insertAdjacentHTML(
    //   "beforeend",
    //   `
    //   <li>
    //   <img src=${x.webImage.url} alt="">
    //   <section>${x.title}</section>
    //   <section>${x.productionPlaces}</section>
    //   </li>`
    // );
  }
  // Titel en productieplaats
  // <section>${x.title}</section>
  // <section>${x.productionPlaces}</section>

  // Routen
  routie({
    "": () => {
      render(data);
    },
    // vanGogh: () => {
    //   updateUI("vanGogh");
    // },
    // RembrandtvanRijn: () => {
    //   updateUI("RembrandtvanRijn");
    // },
    "painting-:id": id => {
      console.log(id);
      updateUI(id);
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
    document.querySelector(".wrapper").remove();

    console.log(document.querySelector(".wrapper"));
    // const activeSection = document.querySelector(`[data-route=${route}]`);
    // console.log(activeSection);
    activeSection.classList.add("active");
    renderDetail(route);
  }
  function removeTopBar() {
    activeSection.innerHTML = "";
    sections.forEach(section => {
      section.classList.remove("active");
    });
  }
}
