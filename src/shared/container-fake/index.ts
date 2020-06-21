import { container } from 'tsyringe';

import IRecipesRepository from 'modules/recipes/repositories/IRecipesRepository';
import RecipesRepository from 'modules/recipes/repositories/fakes/FakeRecipesRepository';

container.registerSingleton<IRecipesRepository>(
  'RecipesRepository',
  RecipesRepository,
);
