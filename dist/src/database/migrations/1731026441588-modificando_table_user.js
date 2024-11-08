"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModificandoTableUser1731026441588 = void 0;
class ModificandoTableUser1731026441588 {
    constructor() {
        this.name = 'ModificandoTableUser1731026441588';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "email" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD "password" character varying NOT NULL`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "password"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "name"`);
    }
}
exports.ModificandoTableUser1731026441588 = ModificandoTableUser1731026441588;
//# sourceMappingURL=1731026441588-modificando_table_user.js.map