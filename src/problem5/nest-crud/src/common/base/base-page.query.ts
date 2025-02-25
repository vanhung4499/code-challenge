import {IsInt, IsOptional, Min} from "class-validator";
import {Type} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class BasePageQuery {

	@ApiProperty({description: 'Page number', example: 1})
	@IsOptional()
	@IsInt()
	@Min(1)
	@Type(() => Number)
	page: number = 1;

	@ApiProperty({description: 'Number of items per page', example: 10})
	@IsOptional()
	@IsInt()
	@Min(1)
	@Type(() => Number)
	limit: number = 10;
}

