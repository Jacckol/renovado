import { User } from "../../users/entities/user.entity";
export declare class Role {
    id: number;
    nombre: string;
    detalle: string;
    users: User[];
}
