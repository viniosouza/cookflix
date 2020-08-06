/* eslint-disable linebreak-style */
import { API_CONFIG } from '../config';

const URL_API_VIDEOS = `${API_CONFIG}/videos`;

function createVideo(dataVideo) {
  return fetch(`${URL_API_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(dataVideo),
  }).then(async (response) => {
    if (response.ok) {
      const data = await response.json();
      return data;
    }

    throw new Error('Não foi possível cadastrar os dados :(');
  });
}

export default {
  createVideo,
};
