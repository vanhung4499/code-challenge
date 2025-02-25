import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {UserModule} from './user/user.module';
import envConfig from '../config/env';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
	imports: [
		ConfigModule.forRoot({
			isGlobal: true,
			envFilePath: [envConfig.path],
		}),
		TypeOrmModule.forRootAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: async (configService: ConfigService) => ({
				type: 'mysql',
				host: configService.get('MYSQL_HOST', 'localhost'),
				port: configService.get<number>('MYSQL_PORT', 3306),
				username: configService.get('MYSQL_USER', 'root'),
				password: configService.get('MYSQL_PASSWORD', '123456'),
				database: configService.get('MYSQL_DATABASE', '99tech'),
				entities: [__dirname + '/**/*.entity{.ts,.js}'],
				synchronize: true,
			}),
		}),
		UserModule,
	],
	controllers: [],
	providers: [],
})
export class AppModule {
}
