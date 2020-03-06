import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from '../../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokeComponentFunction = new EventEmitter()
  subsVar: Subscription

  constructor() { }

  onButtonClick(){
    this.invokeComponentFunction.emit();
  }
}
