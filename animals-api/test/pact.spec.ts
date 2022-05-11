import { Verifier } from '@pact-foundation/pact';
import path from 'path';
import { animalsApiSettings } from '../src/settings'
import { stateHandlers } from './stateHandlers';

describe("API provider pact verification", () => {
    const verifier = new Verifier({
        providerBaseUrl: animalsApiSettings.baseUrl,
        pactUrls: [path.resolve(process.cwd(), '../countries-api/pact/pacts/countries_api-animals_api.json')],
        stateHandlers
    });

    it("has verified pact", async () => {
        const output = await verifier.verifyProvider();
        console.log(output);
    })
});
