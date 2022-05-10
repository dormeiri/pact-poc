import { Verifier } from '@pact-foundation/pact';
import { animalsApiSettings } from '../src/settings'

const opts = {
    providerBaseUrl: animalsApiSettings.baseUrl,
    pactUrls: ['/Users/dmeiri/github/dormeiri/pact-poc/consumer/pact/pacts/countries_api-animals_api.json'],
}

describe("Pact Verification", () => {
    const verifier = new Verifier(opts);
    it("Validates the expectations of 'Matching Service'", async () => {
        const output = await verifier.verifyProvider();

        console.log("Pact Verification Complete!")
        console.log(output)
    })
});