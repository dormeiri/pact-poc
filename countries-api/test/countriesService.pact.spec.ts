import { pactWith } from "jest-pact"
import { animalsApiSettings } from "../src/settings";
import { CountriesService } from "../src/countriesService";
import { Matchers, MessageProviderPact } from "@pact-foundation/pact";
import path from "path";
import { produceAnimal } from "../src/animalsUtils";
import { Animal } from "../src/types";

const { like, eachLike } = Matchers;

export const ANIMAL = {
    first_name: "Billy",
    last_name: "Goat",
    kind: "goat",
    age: 21,
    gender: "M",
    location: {
        country: "Australia",
        post_code: 3000
    },
    interests: eachLike('Speed Climbing')
};

export const ALL_ANIMALS_RESPONSE_BODY = {
    animals: eachLike(ANIMAL)
}

export const NO_ANIMALS_RESPONSE_BODY = {
    animals: [] as unknown[]
}

const service = new CountriesService();

pactWith(
    {
        consumer: "Countries API",
        provider: "Animals API",
        port: Number(animalsApiSettings.port)
    },
    provider => {
        describe("when requesting all countries with animals", () => {
            describe("and the provider has animals", () => {
                it("returns countries with animals", async () => {
                    await provider.addInteraction({
                        state: "has animals",
                        uponReceiving: "a request to receive all animals",
                        withRequest: {
                            method: "GET",
                            path: "/animals"
                        },
                        willRespondWith: {
                            status: 200,
                            body: like(ALL_ANIMALS_RESPONSE_BODY)
                        },
                    })
                    const countries = await service.getCountries(true);
                    expect(countries).toEqual({ countries: [ANIMAL.location.country] })
                })
            })
            describe("and the provider has no animals", () => {
                it("returns no countries", async () => {
                    await provider.addInteraction({
                        state: "no animals",
                        uponReceiving: "a request to receive all animals",
                        withRequest: {
                            method: "GET",
                            path: "/animals"
                        },
                        willRespondWith: {
                            status: 200,
                            body: NO_ANIMALS_RESPONSE_BODY
                        },
                    })
                    const countries = await service.getCountries(true);
                    expect(countries).toEqual({ countries: [] })
                })
            })
        });
    }
)

describe("message provider pact verification", () => {
    // Pact setup
    const messagePact = new MessageProviderPact({
        messageProviders: {
            "an animal message to forward": async () => produceAnimal("Colombia"),
        },
        provider: "Countries API",
        pactUrls: [path.resolve(process.cwd(), "../data-forwarder/pact/pacts/data_forwarder-countries_api.json")],
    })

    // Verify
    it("has verified pact", async () => {
        const output = await messagePact.verify();
        console.log(output);
    })
})
