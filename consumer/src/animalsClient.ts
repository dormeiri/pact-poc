import { Animal, AnimalsResponse } from "./types"
import * as axios from "axios"
import { animalsApiSettings } from '../../provider/src/settings'

export class AnimalsClient {
  private baseUrl = animalsApiSettings.baseUrl;

  public async getAllAnimals(): Promise<Animal[]> {
    console.log(this.baseUrl + '/animals');
    const response = await axios.default.get<AnimalsResponse>(
      this.baseUrl + '/animals'
    )

    return response.data.animals;
  }

  public async getAnimalsByCountry(country: string): Promise<Animal[]> {
    const config = {
      params: { country }
    };

    const response = await axios.default.get<AnimalsResponse>(
      this.baseUrl + '/animals',
      config
    )

    return response.data.animals;
  }
}
