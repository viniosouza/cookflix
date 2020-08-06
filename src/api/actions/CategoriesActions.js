/* eslint-disable linebreak-style */
import { API_CONFIG } from '../config';

const URL_API_CATEGORIES = `${API_CONFIG}/categories`;

function createCategory(categoryData) {
  return fetch(`${URL_API_CATEGORIES}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(categoryData),
  }).then(async (response) => {
    if (response.ok) {
      const data = await response.json();
      return data;
    }

    throw new Error('Não foi possível cadastrar os dados');
  });
}

function getAll() {
  return fetch(`${URL_API_CATEGORIES}`).then(async (response) => {
    if (response.ok) {
      const data = await response.json();
      return data;
    }

    throw new Error('Não foi possível pegar os dados :(');
  });
}

function getAllWithVideos() {
  return fetch(`${URL_API_CATEGORIES}?_embed=videos`).then(async (response) => {
    if (response.ok) {
      const data = await response.json();
      return data;
    }

    throw new Error('Não foi possível pegar os dados :(');
  });
}

export default {
  getAllWithVideos,
  getAll,
  createCategory,
};
