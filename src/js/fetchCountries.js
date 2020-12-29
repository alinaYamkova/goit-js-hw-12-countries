//================Окремо логіка HTTP-запитів(все,що за них відповідає)===============================================

function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
  
  return fetch(url)
  .then(response => response.json())
};

export default fetchCountries;