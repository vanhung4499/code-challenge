import {Body, Controller, Delete, Get, Param, Patch, Post, Query} from '@nestjs/common';
import {UserService} from "./user.service";
import {User} from "./user.entity";
import {CreateUserDto, UpdateUserDto, UserPageQuery} from "./dto";
import {Page} from "../common/base/page";
import {ApiOperation, ApiTags} from "@nestjs/swagger";

@ApiTags('user')
@Controller('user')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@ApiOperation({summary: 'Get all users'})
	@Get('all')
	async getAllUsers(): Promise<User[]> {
		return this.userService.findAll();
	}

	@ApiOperation({summary: 'Get users with conditions'})
	@Get()
	async find(@Query() userPageQuery: UserPageQuery): Promise<Page<User>> {
		return this.userService.findWithConditions(userPageQuery);
	}

	@ApiOperation({summary: 'Get user by id'})
	@Get(':id')
	async getUser(@Param('id') id: number): Promise<User> {
		return this.userService.findOne(id);
	}

	@ApiOperation({summary: 'Create new user'})
	@Post()
	async createUser(@Body() createUserDto: CreateUserDto): Promise<void> {
		return this.userService.create(createUserDto);
	}

	@ApiOperation({summary: 'Update existing user'})
	@Patch(':id')
	async updateUser(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto): Promise<void> {
		updateUserDto.id = id;
		return this.userService.update(updateUserDto);
	}

	@ApiOperation({summary: 'Delete user'})
	@Delete(':id')
	async deleteUser(@Param('id') id: number): Promise<void> {
		return this.userService.delete(id);
	}
}
