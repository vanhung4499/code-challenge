import {ResultCode} from "./result-code";

/**
 * Result represents the structure of the response.
 */
export class Result {

	/**
	 * Result code, can be a success or error code.
	 */
	code: string;

	/**
	 * Result message
	 */
	msg: string | null;

	/**
	 * Result data
	 */
	data: any;


	/**
	 * Constructor
	 * @param code
	 * @param msg
	 * @param data
	 */
	constructor(code: string, msg: string | null, data: any) {
		this.code = code;
		this.msg = msg;
		this.data = data;
	}

	/**
	 * Success result with data
	 * @param data
	 */
	static success(data: any = null): Result {
		return new Result(ResultCode.SUCCESS.code, ResultCode.SUCCESS.msg, data);
	}

	/**
	 * Create an error result
	 * @param code
	 * @param msg
	 */
	static failed(resultCode: ResultCode): Result {
		return new Result(resultCode.code, resultCode.msg, null);
	}

}