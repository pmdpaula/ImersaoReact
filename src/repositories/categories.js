import config from '../config/config';

const URL_CATEGORIES = `${config.URL_BACKEND_SERVER}/categories`;

const getAllWithVideos = () => fetch(`${URL_CATEGORIES}?_embed=videos`)
  .then(async (resp) => {
    if (resp.ok) {
      const response = await resp.json();
console.log(response);
      return response;
    }

    throw new Error('Não foi possível pegar os dados :(');
  });

export default {
  getAllWithVideos,

};
