import { messagePactWith, pactWith } from "jest-pact"
import { Matchers, synchronousBodyHandler } from "@pact-foundation/pact";
import { handleEventRecord } from "..";
import { animalsApiSettings } from "../settings";

const { like } = Matchers;

export const ANIMAL = {
    first_name: "Billy",
    last_name: "Goat",
    kind: "goat",
    age: 21,
    gender: "M",
    location: {
        country: "Australia",
        post_code: 3000
    }
};

messagePactWith(
    {
        consumer: "Data Forwarder",
        provider: "Countries API",
    },
    (messagePact) => {
        pactWith(
            {
                consumer: "Data Forwarder",
                provider: "Animals API",
                port: Number(animalsApiSettings.port)
            },
            (provider) => {
                describe("when receiving an animal message to forward", () => {
                    it("accepts it", async () => {
                        await provider.addInteraction({
                            state: "has animals",
                            uponReceiving: "a request to save an animal",
                            withRequest: {
                                method: "POST",
                                path: "/animals",
                                headers: { "Content-Type": "application/json" },
                                body: like(ANIMAL)
                            },
                            willRespondWith: {
                                status: 200,
                                body: like(ANIMAL)
                            },
                        })
                        await messagePact
                            .expectsToReceive("an animal message to forward")
                            .withContent(like(ANIMAL))
                            .verify(synchronousBodyHandler(handleEventRecord))
                    });
                });
            }
        )
    }
)