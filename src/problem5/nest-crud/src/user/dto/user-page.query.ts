import {BasePageQuery} from "../../common/base";
import {IsDate, IsOptional, IsString} from "class-validator";
import {ApiPropertyOptional} from "@nestjs/swagger";

export class UserPageQuery extends BasePageQuery {
	@ApiPropertyOptional({description: 'Username', example: 'vanhung4499'})
	@IsOptional()
	@IsString()
	username: string;

	@ApiPropertyOptional({description: 'Email', example: 'vanhung449@gmail.com'})
	@IsOptional()
	@IsString()
	email: string;

	@ApiPropertyOptional({description: 'First name', example: 'Hung'})
	@IsOptional()
	@IsString()
	firstname: string;

	@ApiPropertyOptional({description: 'Last name', example: 'Nguyen'})
	@IsOptional()
	@IsString()
	lastname: string;
}