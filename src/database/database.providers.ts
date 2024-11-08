import { DataSource } from "typeorm"
import { ConfigService } from "src/config/config.service";

export const databaseProvider=[
    {
        provide: 'DATABASE_CONNECTION_POSTGRES',
        inject: [ConfigService],
        useFactory:(config: ConfigService)=>{
            const dataSource= new DataSource({
                type:'postgres',
                host:config.get('HOST') ||'localhost',
                port: +config.get('PORT_DB'),
                username: config.get('USERNAME')||'root',
                password: config.get('PASSWORD')|| 'prueba',
                database: config.get('DATABASE'),
               
            });

            return dataSource.initialize();
        }
    }
]