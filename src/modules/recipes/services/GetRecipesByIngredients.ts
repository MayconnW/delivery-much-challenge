import AppError from 'shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import IRecipe from 'modules/recipes/entities/IRecipe';
import IRecipesRepository from '../repositories/IRecipesRepository';

interface IRequest {
  ingredients: string[];
}

interface IResponse {
  recipes: IRecipe[];
}

@injectable()
export default class GetRecipesByIngredients {
  constructor(
    @inject('RecipesRepository')
    private recipesRepository: IRecipesRepository,
  ) {}

  public async execute({ ingredients }: IRequest): Promise<IResponse> {
    if (ingredients.length === 0) {
      throw new AppError('Pelo menos um ingrediente deve ser enviado');
    }

    if (ingredients.length > 3) {
      throw new AppError('O máximo de ingredientes permitidos são 3');
    }

    const recipes = await this.recipesRepository.findByIngredients(ingredients);
    return { recipes };
  }
}
