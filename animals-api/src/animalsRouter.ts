import { Router } from 'express';
import { AnimalsController } from './animalsController';

export const animalsRouter = Router();
const controller = new AnimalsController();

animalsRouter.get('/', controller.getAll);
animalsRouter.get('/:id', controller.getById);
animalsRouter.post('/', controller.create);
animalsRouter.delete('/', controller.delete);
