import { Animal } from './types';
import { AnimalsClient } from './animalsClient';

const animalsClient = new AnimalsClient();

// Consumer handler, responsible for extracting message from SNS
// and dealing with lambda-related things.
export async function handler(event: any) {
    console.log("Received event from SNS")

    for (const record of event.Records) {
        handleEventRecord(JSON.parse(record.Sns.Message));
    }
}

export async function handleEventRecord(animal: Animal) {
    await animalsClient.postAnimal(animal);
}
