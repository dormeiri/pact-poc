import { Animal } from "./types";

export function produceAnimal(country: string): Animal {
    return {
        first_name: "Albert",
        last_name: "Einstein",
        kind: "Dog",
        age: 10,
        gender: "M",
        location: {
            country: country,
            post_code: 1955
        },
        interests: ["Physics", "Math", "Zoomies"]
    };

}
