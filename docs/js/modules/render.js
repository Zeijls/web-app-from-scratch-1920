export const render = {
  // Loading state
  loader: function (id) {
    var id = document.getElementById(id);
    var render =
      '<div class="loader"><img src="img/loading3.gif" alt="loading"><p>Loading...</p></div>';
    // Insert adjacent HMTL
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
    id.insertAdjacentHTML("beforeend", render);
  },

  // Renderen overview
  renderOverview: function (art) {
    let i = 0;
    // console.log(art);
    // Filter Titels met minder dan 30 tokens gaan eruit
    // function isLongEnough(value) {
    //   return value.title.length >= 30;
    // }
    // Filtert de data boven de 30 tokens is true onder 30 is false
    // https://developer.mozilla.org/nl/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
    // const newData = art.filter(isLongEnough);
    const contentwrapper = document.getElementById("overview");
    const painting = document.getElementById("painting");
    contentwrapper.insertAdjacentHTML(
      "afterbegin",
      `
    <div class="wrapper">
    <ul id="rijksContainer">
    </ul>
  </div>`
    );
    // Inner HTML
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML
    painting.innerHTML = "";

    const rijksContainer = document.getElementById("rijksContainer");

    // Wanneer er geen filter button is geselecteerd
    art.map(function (x) {
      rijksContainer.insertAdjacentHTML(
        "beforeend",
        `
             <li>
                <a href="#painting/${x.id}" > <img src=${x.webImage.url} alt=""> </a>
             </li>`
      );
      i++;
    });

    console.log(art);
    // Haalt de schilderijen op voor de overzichtspagina
    // Map loopt door de data heen, en geeft het opgevraagde terug (ongeveer hetzelfde als forEach loop)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

    // Filter buttons
    const rijnButton = document.querySelector(".vRijn");
    // const goyaButton = document.querySelector(".Goya");

    // Filter Rembrandt van Rijn
    // console.log(art);
    rijnButton.addEventListener("click", getRijnData);
    // const artData = art;
    // console.log(art);
    // console.log("RijnButton is clicked!");
    // console.log(art);
    // const rijnData = art.filter(
    //   art.principalOrFirstMaker === "Rembrandt+van+Rijn"
    // );

    // console.log(art);
    const artData = art;
    function getRijnData() {
      // event.preventDefault;
      console.log(artData);
      const rijnData = artData.filter((item) => {
        return item.principalOrFirstMaker === "Rembrandt van Rijn";
      });

      console.log(rijnData);

      removePaintings();

      rijnData.map((x) => {
        rijksContainer.insertAdjacentHTML(
          "beforeend",
          `
             <li>
                <a href="#painting/${x.id}" > <img src=${x.webImage.url} alt=""> </a>
             </li>`
        );
        i++;
      });
    }

    // Filter "Piero di Cosimo"
    const cosimoButton = document.querySelector(".Cosimo");

    cosimoButton.addEventListener("click", getCosimoData);

    // console.log(art);
    // const artData2 = art;
    function getCosimoData() {
      // event.preventDefault;
      console.log(artData);
      const cosimoData = artData.filter((item) => {
        return item.principalOrFirstMaker === "Piero di Cosimo";
      });

      // console.log(rijnData);

      removePaintings();

      cosimoData.map((x) => {
        rijksContainer.insertAdjacentHTML(
          "beforeend",
          `
              <li>
                 <a href="#painting/${x.id}" > <img src=${x.webImage.url} alt=""> </a>
              </li>`
        );
        i++;
      });
    }

    function removePaintings() {
      let element = document.getElementById("rijksContainer");
      // While
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }
    }
  },

  // Rederen Detailpagina
  renderDetail: function (art, id) {
    const activeSection = document.querySelector("[data-route=painting]");

    // function isLongEnough(value) {
    //   return value.title.length > 30;
    // }
    // const newData = art.filter(isLongEnough);

    // acc = accumulator (getelde waarde)
    // cur = currentValue (huidige waarde)
    // In de berekening acc = cur.id zijn gelijk aan elkaar, maar als id niet kan vinden behoudt hij de vorige waarde
    // Bas heeft hiermee geholpen
    // Bron: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    const painting = art.reduce(
      (acc, cur) => (acc = cur.id === id ? cur : acc)
    );
    console.log(painting);

    // Schilderij, titel en productieplaats ophalen
    activeSection.insertAdjacentHTML(
      "beforeend",
      `
        <img src=${painting.webImage.url} alt="">
        <div>
        <section>${painting.title}</section>
        <section>${painting.productionPlaces}</section>
        <section>${painting.principalOrFirstMaker}</section>
        <a href=""> Terug naar overzicht</a>
        </div>
        `
    );
  },

  remove: function () {
    let div = document.getElementById("overview");
    // While
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while
    while (div.firstChild) {
      div.removeChild(div.firstChild);
    }
  },
};
