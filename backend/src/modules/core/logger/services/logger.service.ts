import { Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

@Injectable()
export class LoggerService {
  constructor(@Inject(WINSTON_MODULE_NEST_PROVIDER) private readonly ws: LoggerService) {
    
  }
  /**
   * Write a 'log' level log.
   */
  log(message: any, ...optionalParams: any[]) {
    this.ws.log(message, ...optionalParams)
  }

  /**
   * Write a 'fatal' level log.
   */
  fatal(message: any, ...optionalParams: any[]) {
    this.ws.fatal(message, ...optionalParams)
  }

  /**
   * Write an 'error' level log.
   */
  error(message: any, ...optionalParams: any[]) {
    this.ws.error(message, ...optionalParams)
  }

  /**
   * Write a 'warn' level log.
   */
  warn(message: any, ...optionalParams: any[]) {
    this.ws.warn(message, ...optionalParams)
  }

  /**
   * Write a 'debug' level log.
   */
  debug(message: any, ...optionalParams: any[]) {
    this.ws.debug(message, ...optionalParams)
  }

  /**
   * Write a 'verbose' level log.
   */
  verbose(message: any, ...optionalParams: any[]) {
    this.ws.verbose(message, ...optionalParams)
  }
}