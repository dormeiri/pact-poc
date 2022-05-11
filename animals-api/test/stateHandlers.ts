import * as axios from "axios";
import { Animal } from "../src/types";
import { animalsApiSettings } from "../src/settings";

const ANIMALS: Animal[] = [
    {
        first_name: "Billy",
        last_name: "Goat",
        kind: "goat",
        age: 21,
        gender: "M",
        location: {
            country: "Australia",
            post_code: 3000
        },
        interests: ["Books"]
    },
    {
        first_name: "Nanny",
        kind: "goat",
        last_name: "Doe",
        age: 27,
        gender: "F",
        location: {
            country: "Australia",
            post_code: 3000
        },
        interests: ["Walking", "Books"]
    },
    {
        first_name: "Simba",
        last_name: "Cantwaittobeking",
        kind: "lion",
        age: 4,
        gender: "M",
        location: {
            country: "Australia",
            post_code: 3000
        },
        interests: ["Parkour"]
    }
]

const apiUrl = animalsApiSettings.baseUrl + '/animals'

export const stateHandlers = {
    'no animals': async () => {
        await axios.default.delete(apiUrl);
    },
    'has animals': async () => {
        await axios.default.delete(apiUrl);
        for(const animal of ANIMALS) {
            await axios.default.post(apiUrl, animal);
        }
    }
}