import { BASE_API_URL, SHOW_RESOURCE } from './consts';
import utils from './utils';

const api = baseApiUrl => endpoint => {
  const url = `${baseApiUrl}/${endpoint}`;

  const getAllShows = async () => {
    const resource = 'shows';
    try {
      const apiResponse = await fetch(`${url}`);
      return utils.formatResponse({ data: await apiResponse.json() });
    } catch (e) {
      console.error(e);
      utils.formatError({ error: e, resource });
    }
  };

  const getShowById = async ({ id }) => {
    const resource = 'show';
    try {
      const apiResponse = await fetch(`${url}/${id}`);
      return utils.formatResponse({ data: await apiResponse.json() });
    } catch (e) {
      console.error(e);
      utils.formatError({ error: e, resource });
    }
  };

  return {
    getAllShows,
    getShowById
  }
};

const baseApi = api(BASE_API_URL);

const showApi = baseApi(SHOW_RESOURCE);

export {
  showApi
};
