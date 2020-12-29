//===========Окремо створення і наповнення розмітки/шаблонізатор============

import notify from './notifications';
import refs from './refs';
import countryTpl from '../templates/country.hbs';
import listCountiesTpl from '../templates/countries_list.hbs';


function returnResult(result) {
  if (result.length > 9) {
    notify.showNotificationError();
    return;
  }
  else if (result.length > 0 && result.length < 9) {
    result.map((country) => {
      toShowCountryList(country);
    });
    return;
  } 
  else if (result.length === 0) {
    toShowCountryMurkup(result[0]);
    return;
  } 
}

function toShowCountryList(result) {
  const markup = listCountiesTpl(result);
  refs.listRef.insertAdjacentHTML('beforeend', markup);
};  

function toShowCountryMurkup(result) {
  const markup = countryTpl(result);
  refs.listRef.insertAdjacentHTML('beforeend', markup);
};  

export default returnResult;