import { PersonaService } from './persona.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
export declare class PersonaController {
    private readonly personaService;
    constructor(personaService: PersonaService);
    create(createPersonaDto: CreatePersonaDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePersonaDto: UpdatePersonaDto): string;
    remove(id: string): string;
}
