import { RequestHandler } from "express";
import { AnimalsModel } from "./animalsModel";

export class AnimalsController {
    private model = new AnimalsModel();

    public getAll: RequestHandler = (req, resp) => {
        try {
            const country = req.query.country as string | undefined;;
            const animals = this.model.getAll(country);
            resp.send({ animals });
        } catch(error) {
            console.error(error);
            resp.status(500).send('Internal server error');
        }
    }

    public getById: RequestHandler = (req, resp) => {
        try {
            const id = Number(req.params.id);
            const animal = this.model.getById(id);
            resp.send(animal);
        } catch(error) {
            console.error(error);
            resp.status(500).send('Internal server error');
        }
    }

    public create: RequestHandler = (req, resp) => {
        try {
            const animal = req.body;
            const createdAnimal = this.model.create(animal);
            resp.send(createdAnimal);
        } catch(error) {
            console.error(error);
            resp.status(500).send('Internal server error');
        }
    }
}
