"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const typeorm_1 = require("typeorm");
const env = process.env.NODE_ENV || 'development';
(0, dotenv_1.config)({
    override: true,
    path: `.env.${env}`,
    debug: true
});
exports.default = new typeorm_1.DataSource({
    type: 'postgres',
    host: process.env.HOST,
    port: +process.env.PORT,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    entities: ['src/**/*.entity.ts'],
    migrations: ['src/database/migrations/*.ts']
});
//# sourceMappingURL=typeorm.config.js.map