import './css/styles.css';
import refs from './js/refs';
import debounce from 'lodash.debounce';
import fetchCountries from './js/fetchCountries';
import returnResult from './js/markups';
import errorMessage from './js/notifications';

refs.searchFormRef.addEventListener('input', debounce(onSeachCountry, 500));
// refs.searchFormRef.addEventListener('blur', onClean);

function onSeachCountry(event) {
  event.preventDefault();
  refs.listRef.innerHTML = '';
  refs.searchFormRef.innerHTML = '';
  refs.country_info.innerHTML = '';
  const inputValue = refs.searchFormRef.value;
  if (!inputValue) {
      return;
  }
  
  fetchCountries(inputValue).then(returnResult).catch(errorMessage);
};

// function onClean(event) {
//   event.preventDefault();
//   const form = document.querySelector('.form-control');
//   form.value = '';
// }