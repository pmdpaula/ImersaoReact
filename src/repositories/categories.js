import config from '../config/config';

const URL_CATEGORIES = `${config.URL_BACKEND_SERVER}/categories`;

const getAllWithVideos = () => fetch(`${URL_CATEGORIES}?_embed=videos`)
  .then(async (resp) => {
    if (resp.ok) {
      const response = await resp.json();
      return response;
    }

    throw new Error('Não foi possível pegar os dados :(');
  });

const getAll = () => fetch(`${URL_CATEGORIES}`)
  .then(async (resp) => {
    if (resp.ok) {
      const response = await resp.json();
      return response;
    }

    throw new Error('Não foi possível pegar os dados :(');
  });

const create = (catObj) => fetch(`${URL_CATEGORIES}`, {
  method: 'POST',
  headers: {
    'Content-type': 'application/json',
  },
  body: JSON.stringify(catObj),
})
  .then(async (resp) => {
    if (resp.ok) {
      const response = await resp.json();
      return response;
    }

    throw new Error('Não foi possível salvar os dados :(');
  });

export default {
  getAllWithVideos,
  getAll,
  create,
};
