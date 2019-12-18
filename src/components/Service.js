//  const ENDPOINT= "https://rickandmortyapi.com/api/episode/";

function Service() {
    return fetch(
      "https://rickandmortyapi.com/api/episode/"
    ).then(response => response.json());
  }
  export { Service };