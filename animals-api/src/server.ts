import { App } from './app';
import { animalsApiSettings } from './settings';

new App().server.listen(animalsApiSettings.port);
