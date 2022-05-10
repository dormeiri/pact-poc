import { HTTPMethod } from "@pact-foundation/pact/src/common/request";
import { Matchers } from "pact"

export const ANIMAL = {
    "first_name": "Billy",
    "last_name": "Goat",
    "kind": "goat",
    "age": 21,
    "gender": "M",
    "location": {
        "country": "Australia",
        "post_code": 3000
    }
};

export const ALL_ANIMALS_DATA = Matchers.eachLike(ANIMAL);

export const ALL_ANIMALS_RESPONSE_BODY = {
    animals: ALL_ANIMALS_DATA
}

export const ALL_ANIMALS_RESPONSE = {
    status: 200,
    body: ALL_ANIMALS_RESPONSE_BODY
};

export const ALL_ANIMALS_REQUEST = {
    method: HTTPMethod.GET,
    path: "/animals"
}
