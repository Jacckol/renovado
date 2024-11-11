import { MigrationInterface, QueryRunner } from "typeorm";
export declare class CreateProductoTable1731351470005 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
