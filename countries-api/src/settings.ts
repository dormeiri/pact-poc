export const animalsApiSettings: Record<string, string> = {
    port: process.env.ANIMALS_API_PORT ?? '8080',
    host: process.env.ANIMALS_API_HOST ?? 'localhost',
    protocol: process.env.ANIMALS_API_PROTOCOL ?? 'http'
}
animalsApiSettings.baseUrl = `${animalsApiSettings.protocol}://${animalsApiSettings.host}:${animalsApiSettings.port}`;

export const countriesApiSettings = {
    port: Number(process.env.COUNTRIES_API_PORT ?? '8081'),
}
