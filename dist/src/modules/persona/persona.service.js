"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonaService = void 0;
const common_1 = require("@nestjs/common");
let PersonaService = class PersonaService {
    create(createPersonaDto) {
        return 'This action adds a new persona';
    }
    findAll() {
        return `This action returns all persona`;
    }
    findOne(id) {
        return `This action returns a #${id} persona`;
    }
    update(id, updatePersonaDto) {
        return `This action updates a #${id} persona`;
    }
    remove(id) {
        return `This action removes a #${id} persona`;
    }
};
exports.PersonaService = PersonaService;
exports.PersonaService = PersonaService = __decorate([
    (0, common_1.Injectable)()
], PersonaService);
//# sourceMappingURL=persona.service.js.map