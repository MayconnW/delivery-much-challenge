import IRecipesRepository from 'modules/recipes/repositories/IRecipesRepository';
import IRecipe from 'modules/recipes/entities/IRecipe';
import getRecipes from '../services/GetRecipes';

class RecipesRepository implements IRecipesRepository {
  public async findByIngredients(ingredients: string[]): Promise<IRecipe[]> {
    const recipes = (await getRecipes(ingredients)).map(recipe => ({
      title: recipe.title,
      ingredients: recipe.ingredients.split(',').map(item => item.trim()),
      link: recipe.href,
      gif: '',
    }));

    return recipes;
  }
}

export default RecipesRepository;
