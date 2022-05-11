import { App } from './app';
import { countriesApiSettings } from './settings';

new App().server.listen(countriesApiSettings.port);
