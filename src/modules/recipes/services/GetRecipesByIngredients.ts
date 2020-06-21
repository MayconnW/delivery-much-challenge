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
      throw new AppError('O cozinheiro precisa de ao menos um ingrediente para lhe fornecer as receitas.');
    }

    if (ingredients.length > 3) {
      throw new AppError('O cozinheiro pediu para que lhe envie no máximo 3 ingredientes.');
    }

    try {
      const recipes = await this.recipesRepository.findByIngredients(ingredients);
      return { recipes };
    }catch {
      throw new AppError('O cozinheiro está procurando pelo seu caderno de receitas. Tente novamente em alguns instantes.')
    }

  }
}
