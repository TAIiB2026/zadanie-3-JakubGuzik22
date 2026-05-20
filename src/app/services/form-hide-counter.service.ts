import { Injectable } from '@angular/core';

@Injectable()
export class FormHideCounterService {
  private count = 0;

  increment(): void {
    this.count++;
  }

  getCount(): number {
    return this.count;
  }
}
