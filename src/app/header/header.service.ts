import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class HeaderService {
  logoClicked = new EventEmitter<boolean>();
  constructor() { }

  receiveEventFromHeader() {
    this.logoClicked.emit();
  }
}
