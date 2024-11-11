import { Cliente } from "../../cliente/entities/cliente.entity";
import { PedidoProducto } from "./pedidoproducto.entity";
export declare class Pedido {
    id: number;
    fecha: string;
    estado: number;
    observaciones: string;
    cliente: Cliente;
    pedidoProducto: PedidoProducto[];
}
