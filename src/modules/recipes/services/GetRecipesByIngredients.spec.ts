import 'reflect-metadata';
import AppError from '../../../shared/errors/AppError';
import GetRecipesByIngredients from './GetRecipesByIngredients';
import '../../../shared/container-fake';
import { container } from 'tsyringe';

describe('GetRecipesByIngredients', () => {
  it('Should return a list of recipes', async () => {
    const getRecipesService = container.resolve(GetRecipesByIngredients);

    const { recipes } = await getRecipesService.execute({
      ingredients: ['ice', 'vodka', 'juice'],
    });

    expect(recipes).toBeInstanceOf(Array);
    expect(recipes).toHaveLength(2);
    expect(recipes[0]).toBeInstanceOf(Object);
    expect(recipes[0]).toHaveProperty('title');
    expect(recipes[0]).toHaveProperty('ingredients');
    expect(recipes[0]).toHaveProperty('link');
    expect(recipes[0]).toHaveProperty('gif');
  });

  it('Should return a error when do not inform any ingredients', async () => {
    const getRecipesService = container.resolve(GetRecipesByIngredients);

    expect(
      getRecipesService.execute({
        ingredients: [],
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Should return a error when informed more than 3 ingredients', async () => {
    const getRecipesService = container.resolve(GetRecipesByIngredients);

    expect(
      getRecipesService.execute({
        ingredients: ['um', 'dois', 'tres', 'quatro'],
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
