const URL_BACKEND_SERVER = window.location.hostname.includes('localhost')
  ? 'http://localhost:8080'
  : 'https://imersao-react-axethings.herokuapp.com';

export default {
  URL_BACKEND_SERVER,
};
