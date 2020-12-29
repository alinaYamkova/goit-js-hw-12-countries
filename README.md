
function fetchCountries(searchQuery) {
  const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;

  return fetch(url)
    .then(response => {console.log(response);
      if (response.ok) {return response.json()};
      return 'Err';
    })
    .then((result) => {
      console.log(result)
      // const countriesList = result.map((el) => el); 
      // console.log(el)     
      if (result.length > 9) {
        notify.showNotificationError();
        return;
      }
      else if (result.length > 0 && result.length < 9) {
        markup.toShowCountryList();
        // const markup = listTpl(result);
        // refs.listRef.insertAdjacentHTML('beforeend', markup);
        return;
      } 
      else if (result.length === 1) {
        markup.toShowCountryMurkup();
        // const markup = countryTpl(result);
        // refs.country_info.insertAdjacentHTML('beforeend', markup);
        return;
      }  
    })
    .catch(error => {
      notify.errorMessege();
      return;
    });
};