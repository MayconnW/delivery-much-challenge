import { Request, Response } from 'express';
import { container } from 'tsyringe';
import GetRecipesByIngredientsService from 'modules/recipes/services/GetRecipesByIngredients';
import AppError from 'shared/errors/AppError';

class RecipesController {
  public async index(req: Request, res: Response): Promise<Response> {
    const { i } = req.query;
    if (typeof i !== 'string') {
      throw new AppError(
        "Parametro 'i' deve ser uma string e conter os ingredientes separados por ','",
      );
    }
    const ingredients = i.split(',').map(item => item.trim());

    const getRecipesByIngredientsService = container.resolve(
      GetRecipesByIngredientsService,
    );
    const { recipes } = await getRecipesByIngredientsService.execute({
      ingredients,
    });

    return res.json({
      keywords: ingredients,
      recipes,
    });
  }
}

export default new RecipesController();
