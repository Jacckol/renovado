import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
export declare class PersonaService {
    create(createPersonaDto: CreatePersonaDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePersonaDto: UpdatePersonaDto): string;
    remove(id: number): string;
}
