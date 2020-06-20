import { container } from 'tsyringe';

import IRecipesRepository from 'modules/recipes/repositories/IRecipesRepository';
import RecipesRepository from 'modules/recipes/infra/api/repositories/RecipesRepository';

container.registerSingleton<IRecipesRepository>(
  'RecipesRepository',
  RecipesRepository,
);
