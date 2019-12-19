  

function Service() {
  const ENDPOINT= "https://rickandmortyapi.com/api/episode/";
    return fetch(ENDPOINT)
    .then(response => response.json());
  }
  export { Service };