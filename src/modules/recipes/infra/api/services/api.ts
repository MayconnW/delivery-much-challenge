import axios from 'axios';

const baseRecipeApiURL = process.env.RECIPE_API_HOST;
const baseGiphyApiURL = process.env.GIPHY_API_HOST;
const giphyApiKey = process.env.GIPHY_API_KEY;
const headers = { Accept: 'application/json' };

const recipeApi = axios.create({
  baseURL: `${baseRecipeApiURL}`,
  headers,
});

const giphyApi = axios.create({
  baseURL: `${baseGiphyApiURL}/v1`,
  headers: { ...headers, api_key: giphyApiKey },
});

export { recipeApi, giphyApi };
