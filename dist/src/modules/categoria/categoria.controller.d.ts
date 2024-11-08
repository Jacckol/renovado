import { CategoriaService } from './categoria.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
export declare class CategoriaController {
    private readonly categoriaService;
    constructor(categoriaService: CategoriaService);
    create(createCategoriaDto: CreateCategoriaDto): string;
    findAll(): Promise<import("./entities/categoria.entity").Categoria[]>;
    findOne(id: string): string;
    update(id: string, updateCategoriaDto: UpdateCategoriaDto): string;
    remove(id: string): string;
}
