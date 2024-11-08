"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const dotenv_1 = require("dotenv");
let ConfigService = class ConfigService {
    constructor() {
        const env = process.env.NODE_ENV || 'development';
        const envFilePath = `${__dirname}/../../../.env.${env}`;
        const existsPath = fs.existsSync(envFilePath);
        if (!existsPath) {
            console.log(`.env.${process.env.NODE_ENV} no existe`);
            process.exit(0);
        }
        this.envConfig = (0, dotenv_1.parse)(fs.readFileSync(envFilePath));
        console.log("*********", envFilePath);
    }
    get(key) {
        return this.envConfig[key];
    }
};
exports.ConfigService = ConfigService;
exports.ConfigService = ConfigService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], ConfigService);
//# sourceMappingURL=config.service.js.map