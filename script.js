const getFactButton = document.getElementById('get-fact-button');
const catFact = document.getElementById('cat-fact');

getFactButton.addEventListener('click', getCatFact);

function getCatFact() {
  const url = 'https://catfact.ninja/fact'; 

  fetch(url)
    .then(response => response.json()) 
    .then(data => {
      const fact = data.fact;
      catFact.textContent = fact;
    })
    .catch(error => {
      catFact.textContent = "Oops! There seems to be a problem fetching the fact.";
      console.error(error);
    });
}
