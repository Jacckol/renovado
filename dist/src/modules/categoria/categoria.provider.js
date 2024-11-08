"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.categoriaProviders = void 0;
const categoria_entity_1 = require("./entities/categoria.entity");
exports.categoriaProviders = [
    {
        provide: 'CATEGORIA_REPOSITORY',
        useFactory: (dataSource) => dataSource.getRepository(categoria_entity_1.Categoria),
        inject: ['DATABASE_CONNECTION_POSTGRES']
    }
];
//# sourceMappingURL=categoria.provider.js.map