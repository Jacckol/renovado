"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona_table1731113571452 = void 0;
class Persona_table1731113571452 {
    constructor() {
        this.name = 'Persona_table1731113571452';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "persona" ("id" SERIAL NOT NULL, "nombres" character varying NOT NULL, "apellidos" character varying NOT NULL, "userId" integer, CONSTRAINT "REL_551ede1f9ac73b4e8f18495c6d" UNIQUE ("userId"), CONSTRAINT "PK_13aefc75f60510f2be4cd243d71" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "persona" ADD CONSTRAINT "FK_551ede1f9ac73b4e8f18495c6da" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "persona" DROP CONSTRAINT "FK_551ede1f9ac73b4e8f18495c6da"`);
        await queryRunner.query(`DROP TABLE "persona"`);
    }
}
exports.Persona_table1731113571452 = Persona_table1731113571452;
//# sourceMappingURL=1731113571452-persona__table.js.map