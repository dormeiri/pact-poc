export const animalsApiSettings: Record<string, any> = {
    port: Number(process.env.ANIMALS_API_PORT ?? '8080'),
    host: process.env.ANIMALS_API_HOST ?? 'localhost',
    protocol: process.env.ANIMALS_API_PROTOCOL ?? 'http'
}
animalsApiSettings.baseUrl = `${animalsApiSettings.protocol}://${animalsApiSettings.host}:${animalsApiSettings.port}`;
