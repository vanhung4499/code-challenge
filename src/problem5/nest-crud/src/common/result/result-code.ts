/**
 * ResultCode class for representing success or failure.
 *
 * Code format: 5 characters
 * - First character: represents the layer
 * 		- A: Business logic error like not found, invalid input, etc.
 * 		- B: Internal server error like timeout, crash server, etc.
 * 		- C: Infrastructure error like database connection, 3rd party service, etc.
 * - Next 2 characters: represents the module (e.g., user, product, etc.)
 * - Last 2 characters: represents the error code
 */
export class ResultCode {
	// Success
	static readonly SUCCESS = new ResultCode('00000', 'OK');

	// User module
	static readonly USER_NOT_FOUND = new ResultCode('A0001', 'User not found');
	static readonly USER_USERNAME_EXISTED = new ResultCode('A0002', 'Username existed');
	static readonly USER_EMAIL_EXISTED = new ResultCode('A0003', 'Email existed');

	// Internal server error
	static readonly SERVER_ERROR = new ResultCode('B0000', 'Server error, please try again later');
	static readonly INTERNAL_SERVER_ERROR = new ResultCode('B0001', 'Internal server error');
	static readonly SERVER_TIMEOUT = new ResultCode('B0002', 'Server timeout');

	// Infrastructure error
	static readonly DATABASE_ERROR = new ResultCode('C0000', 'Database error');
	static readonly REDIS_ERROR = new ResultCode('C0100', 'Redis error');
	static readonly RABBITMQ_ERROR = new ResultCode('C0200', 'RabbitMQ error');

	constructor(public readonly code: string, public readonly msg: string) {}
}