import { pactWith } from "jest-pact"
import { animalsApiSettings } from "../../provider/src/settings";
import { CountriesService } from "../src/countriesService";
import { ALL_ANIMALS_REQUEST, ALL_ANIMALS_RESPONSE, ANIMAL } from "./constants";

pactWith(
    { consumer: "Countries API", provider: "Animals API", port: animalsApiSettings.port },
    provider => {
        let service: CountriesService;

        beforeAll(() => {
            process.env.ANIMALS_API_BASE_URL = provider.mockService.baseUrl;
            service = new CountriesService();
        });

        describe("when requesting all countries", () => {
            describe("with animals only", () => {
                beforeEach(() => {
                    provider.addInteraction({
                        state: "has animals",
                        uponReceiving: "a request to receive all animals",
                        withRequest: ALL_ANIMALS_REQUEST,
                        willRespondWith: ALL_ANIMALS_RESPONSE,
                    })
                });
                it("returns a successful body", async () => {
                    const countries = await service.getCountries(true);
                    expect(countries).toEqual({ countries: [ANIMAL.location.country] })
                })
            })
        });
    }
)
