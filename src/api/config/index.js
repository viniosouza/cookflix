/* eslint-disable linebreak-style */
const API_CONFIG = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://cook-flix.herokuapp.com';

// eslint-disable-next-line import/prefer-default-export
export { API_CONFIG };
