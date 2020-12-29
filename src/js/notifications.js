import '@pnotify/core/dist/PNotify.css'
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/Material.css';
// import 'material-design-icons/iconfont/material-icons.css';

const { alert, notice, info, success, error } = require('@pnotify/core');
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';

function showNotificationError() {
  error({
    text: "Too many matches found. Please enter a more specific query! "
  });
}

function errorMessage() {
  error({
    text: "oops, something wrong"
  });
}

export default {showNotificationError, errorMessage};