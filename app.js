fetch('https://opentdb.com/api.php?amount=10')
  .then((response) => {
    return response.json();
  })
  .then((myJson) => {
    console.log(myJson);
  });
