import { PetRepository } from '../data-access/pet-repository';
import { JsonFileStore } from '../utils/json-file-store';
import { Pet, PetProperties } from './pet-type'

export class PetService {
    private readonly repository;

    constructor(store: JsonFileStore<Pet>) {
        this.repository = new PetRepository(store);
    }

    async born(name: string) {
        const newPet: PetProperties = {
            name,
            food: 1,
            weight: 1,
            age: 1
        }

        const created = await this.repository.create(newPet);
        return created;
    }

    async getAll() {
        return await this.repository.readAll();
    }
}