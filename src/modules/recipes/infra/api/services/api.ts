import axios from 'axios';

const baseRecipeApiURL = 'http://www.recipepuppy.com'; // process.env.RECIPE_API_HOST;
const baseGiphyApiURL = process.env.GIPHY_API_HOST;
const headers = { Accept: 'application/json' };

const recipeApi = axios.create({
  baseURL: `${baseRecipeApiURL}`,
  headers,
});

const giphyApi = axios.create({
  baseURL: `${baseGiphyApiURL}`,
  headers,
});

export { recipeApi, giphyApi };
