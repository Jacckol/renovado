import { Categoria } from "../../categoria/entities/categoria.entity";
import { PedidoProducto } from "../../pedido/entities/pedidoproducto.entity";
export declare class Producto {
    id: number;
    nombre: string;
    precio: number;
    stock: number;
    image: string;
    descripcion: string;
    estado: boolean;
    categoria: Categoria;
    pedidoProducto: PedidoProducto[];
}
