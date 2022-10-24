import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  private isMenuEnabled = new Subject<boolean>;

  constructor() { }

  setMenuState(enable) {
    this.isMenuEnabled.next(enable);
  }

  getMenuState(): Subject<boolean> {
    return this.isMenuEnabled;
  }
}
