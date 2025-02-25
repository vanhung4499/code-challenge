import {ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus} from '@nestjs/common';
import { Response } from 'express';
import {Result} from "../../../common/result/result";
import {ResultCode} from "../../../common/result/result-code";
import {ServiceException} from "../../../common/exception/service.exception";

@Catch()
export class HttpExceptionFilter<T> implements ExceptionFilter {
  catch(exception: T, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    // Default error response
    let result : Result = Result.failed(ResultCode.SERVER_ERROR);

    // If the exception is an instance of ServiceException
    if (exception instanceof ServiceException) {
      result = exception.getResponse() as Result;
      status = exception.getStatus();
    } else if (exception instanceof HttpException) {
      status = exception.getStatus();
      const exceptionResponse = exception.getResponse();
      if (typeof exceptionResponse === 'object') {
        result = new Result('HTTP_ERROR', exceptionResponse['message'] || 'HTTP Error', null);
      }
    }

    response
      .status(status)
      .json(result);
  }
}
