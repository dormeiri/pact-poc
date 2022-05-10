export interface Animal {
  id: number
  first_name: string
  last_name: string
  kind: string
  age: number
  gender: "M" | "F"
  location: {
    country: string
    post_code: number
  }
  interests: string[]
}

export interface AnimalsResponse {
  animals: Animal[];
}

export interface CountriesResponse {
  countries: string[];
}

export interface KindsFrequenciesResponse {
  kindsFrequencies: Record<string, number>;
}
