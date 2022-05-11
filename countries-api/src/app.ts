import express from 'express';

import { countriesRouter } from './countriesRouter';

export class App {
  public server;

  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use('/countries', countriesRouter);
  }
}
