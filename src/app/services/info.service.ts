import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class InfoService {

  constructor() { }

  private lastFetchDate = new BehaviorSubject<Date | null>(null);
  private lastInstanceDate = new BehaviorSubject<Date | null>(null);

  lastFetchDate$: Observable<Date | null> = this.lastFetchDate.asObservable();
  lastInstanceDate$: Observable<Date | null> = this.lastInstanceDate.asObservable();

  updateLastFetch(): void {
    this.lastFetchDate.next(new Date());
  }

  updateLastInstance(): void {
    this.lastInstanceDate.next(new Date());
  }
}
