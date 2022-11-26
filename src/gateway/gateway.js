export const fetchCharacters = (url) =>
  fetch(url).then((response) => response.json());
