import { Router } from 'express';
import RecipesController from '../controllers/RecipesController';

const recipesRouter = Router();

recipesRouter.get('/', RecipesController.index);

export default recipesRouter;
