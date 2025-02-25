import {Injectable} from '@nestjs/common';
import {User} from "./user.entity";
import {ServiceException} from "../common/exception/service.exception";
import {ResultCode} from "../common/result/result-code";
import {CreateUserDto, UpdateUserDto, UserPageQuery} from "./dto";
import {Page} from "../common/base/page";
import {InjectRepository} from "@nestjs/typeorm";
import {FindManyOptions, Repository, Like} from "typeorm";

@Injectable()
export class UserService {
	constructor(
		@InjectRepository(User)
		private userRepository: Repository<User>,
	) {
	}

	// Find all users
	async findAll(): Promise<User[]> {
		return this.userRepository.find();
	}

	// Find users with conditions
	async findWithConditions(queryParams: UserPageQuery): Promise<Page<User>> {
		// Create filter that get data from query params
		const filter = {};
		if (queryParams.username) {
			filter['username'] = Like(`%${queryParams.username}%`);
		}
		if (queryParams.email) {
			filter['email'] = Like(`%${queryParams.email}%`);
		}
		if (queryParams.firstname) {
			filter['firstName'] = Like(`%${queryParams.firstname}%`);
		}
		if (queryParams.lastname) {
			filter['lastName'] = Like(`%${queryParams.lastname}%`);
		}

		// Create options for query
		const options: FindManyOptions<User> = {
			where: filter,
			skip: (queryParams.page - 1) * queryParams.limit,
			take: queryParams.limit,
		}

		// Find and count
		const [list, total] = await this.userRepository.findAndCount(options);

		// Wrap data to Page object
		return Page.of(list, total);
	}

	// Find user by id
	async findOne(id: number): Promise<User> {
		// Validate user exist
		const user = await this.validateUserExists(id);

		return user;
	}

	// Create new user
	async create(crateUserDto: CreateUserDto): Promise<void> {
		// Validate duplicate username and email
		await this.validateUsernameDuplicate(crateUserDto.username);
		await this.validateEmailDuplicate(crateUserDto.email);

		// Create user
		const user = this.userRepository.create(crateUserDto);
		await this.userRepository.save(user);
	}

	// Update existing user
	async update(updateUserDto: UpdateUserDto): Promise<void> {
		// Check if the user exists
		await this.validateUserExists(updateUserDto.id);

		// Validate duplicate username and email
		if (updateUserDto.username) {
			await this.validateUsernameDuplicate(updateUserDto.username, updateUserDto.id);
		}
		if (updateUserDto.email) {
			await this.validateEmailDuplicate(updateUserDto.email, updateUserDto.id);
		}

		// Update user
		await this.userRepository.update(updateUserDto.id, updateUserDto);
	}

	// Delete user
	async delete(id: number): Promise<void> {
		// Check if the user exists
		await this.validateUserExists(id);

		await this.userRepository.delete(id);
	}

	// === Helper functions ===

	// Validate if the user exists
	async validateUserExists(id: number): Promise<User> {
		const user = await this.userRepository.findOneBy({id});
		if (!user) {
			throw new ServiceException(ResultCode.USER_NOT_FOUND);
		}

		return user;
	}

	// Validate duplicate username
	async validateUsernameDuplicate(username: string, userId: number | null = null): Promise<void> {
		let user = await this.userRepository.findOneBy({username});
		if (!user) {
			return;
		}
		// If userId is not null, it means that the user is updating the user information
		if (!userId || user.id !== userId) {
			throw new ServiceException(ResultCode.USER_USERNAME_EXISTED);
		}
	}

	// Validate duplicate email
	async validateEmailDuplicate(email: string, userId: number | null = null): Promise<void> {
		const user = await this.userRepository.findOneBy({email});
		if (!user) {
			return;
		}
		// If userId is not null, it means that the user is updating the user information
		if (!userId || user.id !== userId) {
			throw new ServiceException(ResultCode.USER_EMAIL_EXISTED);
		}

	}
}
