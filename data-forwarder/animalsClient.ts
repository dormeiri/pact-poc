import { Animal } from "./types"
import * as axios from "axios"
import { animalsApiSettings } from './settings'

export class AnimalsClient {
  private baseUrl = animalsApiSettings.baseUrl;

  public async postAnimal(animal: Animal): Promise<Animal> {
    const response = await axios.default.post<Animal>(
      this.baseUrl + '/animals',
      animal
    )

    return response.data;
  }
}
