import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    nombre:string;

    @Column()  //con esto permitimos que el campo sea nulo
    detalle:string;


    
}
