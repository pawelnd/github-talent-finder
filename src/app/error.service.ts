import { Injectable, EventEmitter } from '@angular/core';

/**
 * Instance of global service.
 * Allows communication between all components
 * Provider for this service should not be added in any component
 * unless you know exactly what you are doing
* */
@Injectable()
export class ErrorService {

  constructor() {}

  errorEvent: EventEmitter<any> =  new EventEmitter();

  reportError(error:any){
    this.errorEvent.emit(error);
  }
}
