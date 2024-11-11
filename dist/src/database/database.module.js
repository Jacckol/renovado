"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const database_providers_1 = require("./database.providers");
const config_service_1 = require("../config/config.service");
const typeorm_1 = require("@nestjs/typeorm");
const config_module_1 = require("../config/config.module");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_module_1.ConfigModule],
                inject: [config_service_1.ConfigService],
                useFactory: (config) => ({
                    type: 'postgres',
                    host: config.get('HOST') || 'localhost',
                    port: +config.get('PORT_DB'),
                    username: config.get('USERNAME') || 'root',
                    password: config.get('PASSWORD') || 'prueba',
                    database: config.get('DATABASE'),
                    entities: [
                        __dirname + '/../**/*.entity{.ts,.js}',
                    ],
                })
            })
        ],
        providers: [...database_providers_1.databaseProvider, config_service_1.ConfigService],
        exports: [...database_providers_1.databaseProvider]
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map