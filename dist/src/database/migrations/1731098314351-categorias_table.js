"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriasTable1731098314351 = void 0;
class CategoriasTable1731098314351 {
    constructor() {
        this.name = 'CategoriasTable1731098314351';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "categoria" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "detalle" character varying NOT NULL, CONSTRAINT "PK_f027836b77b84fb4c3a374dc70d" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "categoria"`);
    }
}
exports.CategoriasTable1731098314351 = CategoriasTable1731098314351;
//# sourceMappingURL=1731098314351-categorias_table.js.map