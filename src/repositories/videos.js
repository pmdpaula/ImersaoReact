import config from '../config/config';

const URL_VIDEOS = `${config.URL_BACKEND_SERVER}/videos`;

const create = (videoObj) => fetch(`${URL_VIDEOS}`, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(videoObj),
})
  .then(async (resp) => {
    if (resp.ok) {
      const response = await resp.json();
      return response;
    }

    throw new Error('Não foi possível salvar os dados :(');
  });

export default {
  create,

};
