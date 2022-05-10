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
