import express from 'express';

import { animalsRouter } from './animalsRouter';

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
    this.server.use('/animals', animalsRouter);
  }
}
