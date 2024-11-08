"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableUser1731025871865 = void 0;
class TableUser1731025871865 {
    constructor() {
        this.name = 'TableUser1731025871865';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
exports.TableUser1731025871865 = TableUser1731025871865;
//# sourceMappingURL=1731025871865-table_user.js.map