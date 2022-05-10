import * as fs from "fs"
import * as path from "path"
import { Animal } from "./types"

export class AnimalsModel {
  private entities: Animal[]

  public constructor() {
    this.entities = []
    this.importData()
  }

  public importData(): void {
    const data = fs.readFileSync(
      path.resolve("./data/animals.json"),
      "utf-8"
    );

    for (const animal of JSON.parse(data)) {
      this.create(animal);
    }
  }

  public getAll(country?: string): Animal[] {
    if (country != null) {
      const countryNormalized = country.trim().toLowerCase();
      return this.entities.filter(entity => entity.location.country.trim().toLowerCase() === countryNormalized);
    } else {
      return this.entities;
    }
  }

  public getById(id: number): Animal {
    return this.entities.find(entity => id === entity.id);
  }

  public create(entity: Animal): Animal {
    const newEntity = {
      id: this.entities.length + 1,
      ...entity,
    }

    this.entities.push(newEntity)

    return newEntity
  }

  public clear() {
    this.entities = []
  }
}
