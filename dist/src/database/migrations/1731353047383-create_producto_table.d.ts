import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateProductoTable1731353047383 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
