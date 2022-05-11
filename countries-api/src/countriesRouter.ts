import { Router } from 'express';
import { CountriesController } from './countriesController';

export const countriesRouter = Router();
const controller = new CountriesController();

countriesRouter.get('/', controller.getCountries);
countriesRouter.get('/animals/kinds/frequencies', controller.getCountryAnimalKindsFrequencies);
