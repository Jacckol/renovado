import { Pedido } from "./pedido.entity";
import { Producto } from "../../producto/entities/producto.entity";
export declare class PedidoProducto {
    id: number;
    pedidoId: number;
    productoId: number;
    cantidad: number;
    pedido: Pedido;
    producto: Producto;
}
