import {IsEmail, IsNumber, IsOptional, IsString} from "class-validator";
import {ApiPropertyOptional} from "@nestjs/swagger";
import {Expose} from "class-transformer";

export class UpdateUserDto {
	@IsOptional()
	@IsNumber()
	id: number;

	@ApiPropertyOptional({description: 'Username', example: 'vanhung4499'})
	@IsString()
	@IsOptional()
	username: string;

	@ApiPropertyOptional({description: 'Email', example: 'vanhung4499@gmail.com'})
	@IsEmail()
	@IsOptional()
	email: string;

	@ApiPropertyOptional({description: 'First name', example: 'Hung', })
	@IsString()
	@IsOptional()
	@Expose({name: 'firstname'})
	firstName: string;

	@ApiPropertyOptional({description: 'Last name', example: 'Nguyen', })
	@IsString()
	@IsOptional()
	lastName: string;

}