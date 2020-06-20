import IRecipe from 'modules/recipes/entities/IRecipe';
import IRecipesRepository from '../IRecipesRepository';

class FakeRecipesRepository implements IRecipesRepository {
  public async findByIngredients(ingredients: string[]): Promise<IRecipe[]> {
    return [
      {
        title: 'Black Santa Martini',
        link: 'http://www.recipezaar.com/Black-Santa-Martini-344505',
        ingredients,
        gif: '',
      },
      {
        title: 'Orange Cream Delight (Screwdriver)',
        link:
          'http://allrecipes.com/Recipe/Orange-Cream-Delight-Screwdriver/Detail.aspx',
        ingredients,
        gif: '',
      },
    ];
  }
}

export default FakeRecipesRepository;
