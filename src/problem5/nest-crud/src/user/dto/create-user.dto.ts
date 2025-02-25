import {IsEmail, IsNotEmpty, IsString} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {

	@ApiProperty({ description: 'Username', example: 'vanhung4499' })
	@IsNotEmpty()
	@IsString()
	username: string;

	@ApiProperty({ description: 'Email', example: 'vanhung4499@gmail.com' })
	@IsNotEmpty()
	@IsEmail()
	email: string;

	@ApiProperty({ description: 'Password', example: '123456' })
	@IsNotEmpty()
	@IsString()
	password: string;
}