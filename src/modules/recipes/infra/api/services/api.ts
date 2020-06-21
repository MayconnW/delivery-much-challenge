import axios from 'axios';

const baseRecipeApiURL = 'http://www.recipepuppy.com'; // process.env.RECIPE_API_HOST;
const baseGiphyApiURL = 'http://api.giphy.com/v1';//process.env.GIPHY_API_HOST;
const giphyApiKey = 'j1PXoyRp9Eszf2oOxUpETR0Y0VWWEEAU'; // process.env.GIPHY_API_KEY;
const headers = { Accept: 'application/json' };

const recipeApi = axios.create({
  baseURL: `${baseRecipeApiURL}`,
  headers,
});

const giphyApi = axios.create({
  baseURL: `${baseGiphyApiURL}`,
  headers: { ...headers, api_key: giphyApiKey },
});

export { recipeApi, giphyApi };
