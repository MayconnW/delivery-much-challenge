import { giphyApi, recipeApi } from './api';

interface IRecipes {
  title: string;
  href: string;
  ingredients: string;
  thumbnail: string;
}

interface IApiRecipesResponse {
  title: string;
  version: number;
  href: string;
  results: IRecipes[];
}

export default async (ingredients: string[]): Promise<IRecipes[]> => {
  const {
    data: { results },
  } = await recipeApi.get<IApiRecipesResponse>(
    `api?i=${ingredients.sort().join(',')}`,
  );

  return results;
};
