import { Animal } from "./types"

export class AnimalsModel {
  private entities: Animal[]

  public constructor() {
    this.entities = []
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

  public deleteAll(): void {
    this.entities = [];
  }
}
