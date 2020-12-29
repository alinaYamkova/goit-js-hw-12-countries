// Есть файл fetchCountries.js с дефолтным экспортом функции 
//fetchCountries(searchQuery), возвращающей промис с 
//массивом стран, результат запроса к API.

fetch('https://restcountries.eu/rest/v2/name/{name}')
  .then(res => res.json())
  .then(data => console.log(data));



  // const url = 'https://restcountries.eu/rest/v2/name';
