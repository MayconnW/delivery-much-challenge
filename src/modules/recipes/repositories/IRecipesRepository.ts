import Recipe from '../entities/IRecipe';

export default interface IRecipesRepository {
  findByIngredients(ingredients: string[]): Promise<Recipe[]>;
}
