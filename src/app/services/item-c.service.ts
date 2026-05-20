import { Injectable } from '@angular/core';
import { InfoService } from './info.service';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemCService {
private items: Item[] = [
    { id: 11, value: 1100, date: new Date('2022-11-01'), name: 'Item C1' },
    { id: 12, value: 1200, date: new Date('2022-12-01'), name: 'Item C2' },
    { id: 13, value: 1300, date: new Date('2022-01-01'), name: 'Item C3' },
    { id: 14, value: 1400, date: new Date('2022-02-01'), name: 'Item C4' },
    { id: 15, value: 1500, date: new Date('2022-03-01'), name: 'Item C5' },
  ];

  constructor(private infoService: InfoService) {
    this.infoService.updateLastInstance();
  }

  getItems(): Item[] {
    this.infoService.updateLastFetch();
    return this.items;
  }

  deleteItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  addItem(item: Item): void {
    this.items.push(item);
  }
}
