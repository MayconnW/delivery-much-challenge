import { recipeApi } from './api';
import getGifByTag from './getGifByTag';

interface IResult {
  title: string;
  href: string;
  ingredients: string;
  thumbnail: string;
}

interface IApiRecipesResponse {
  results: IResult[];
}

interface IRecipe extends IResult {
  gif: string;
}

export default async (ingredients: string[]): Promise<IRecipe[]> => {
  const {
    data: { results },
  } = await recipeApi.get<IApiRecipesResponse>(
    `api?i=${ingredients.sort().join(',')}`,
  );

  const recipes = await Promise.all(results.map(async(item) => ({...item, gif: await getGifByTag(item.title)})));

  return recipes;
};
