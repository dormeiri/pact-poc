import { RequestHandler } from "express";
import { CountriesService } from "./countriesService";
import { parseBooleanQuery } from "./utils";

export class CountriesController {
    private service = new CountriesService();

    public getCountries: RequestHandler = async (req, resp) => {
        try {
            const withAnimalsOnly = parseBooleanQuery(req.query.withAnimalsOnly as string | undefined);
            const countries = await this.service.getCountries(withAnimalsOnly);
            resp.send(countries);
        } catch(error) {
            console.error(error);
            resp.status(500).send('Internal server error');
        }
    }

    public getCountryAnimalKindsFrequencies: RequestHandler = async (req, resp) => {
        try {
            const country = req.query.country as string | undefined;
            const kindsFrequencies = await this.service.getCountryAnimalKindsFrequencies(country);
            resp.send(kindsFrequencies);
        } catch(error) {
            console.error(error);
            resp.status(500).send('Internal server error');
        }
    }
}
