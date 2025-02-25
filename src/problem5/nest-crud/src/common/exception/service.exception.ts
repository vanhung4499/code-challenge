import {HttpException, HttpStatus} from "@nestjs/common";
import {ResultCode} from "../result/result-code";

export class ServiceException extends HttpException {
	constructor(resultCode: ResultCode) {
		super({code: resultCode.code, msg: resultCode.msg}, HttpStatus.INTERNAL_SERVER_ERROR);
	}
}