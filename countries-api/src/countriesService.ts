import { AnimalsClient } from "./animalsClient";
import { produceAnimal } from "./animalsUtils";
import { COUNTRIES } from "./constants";
import { CountriesResponse, KindsFrequenciesResponse } from "./types";

export class CountriesService {
    private animalsClient = new AnimalsClient();

    public async getCountries(withAnimalsOnly?: boolean): Promise<CountriesResponse> {
        const countries = withAnimalsOnly
            ? await this.getCountriesWithAnimalsOnly()
            : COUNTRIES;

        return { countries };
    }

    private async getCountriesWithAnimalsOnly(): Promise<string[]> {
        const animals = await this.animalsClient.getAllAnimals();
        const countries = [...new Set(
            animals.map((animal) => animal.location.country))
        ];
        return countries;
    }

    public async getCountryAnimalKindsFrequencies(country: string): Promise<KindsFrequenciesResponse> {
        const animals = await this.animalsClient.getAnimalsByCountry(country);
        const kindsFrequencies: Record<string, number> = {};
        for (const animal of animals) {
            kindsFrequencies[animal.kind] += 1;
        }
        return { kindsFrequencies };
    }

    public createAnimal(country: string): Promise<void> {
        const animal = produceAnimal(country);
        return this.animalsClient.publishAnimal(animal);
    }
}