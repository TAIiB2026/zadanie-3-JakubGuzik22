import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { InfoService } from './info.service';

@Injectable({
  providedIn: 'root'
})
export class ItemBService {
 private items: Item[] = [
    { id: 6, value: 600, date: new Date('2024-06-01'), name: 'Item B1' },
    { id: 7, value: 700, date: new Date('2024-07-01'), name: 'Item B2' },
    { id: 8, value: 800, date: new Date('2024-08-01'), name: 'Item B3' },
    { id: 9, value: 900, date: new Date('2024-09-01'), name: 'Item B4' },
    { id: 10, value: 1000, date: new Date('2024-10-01'), name: 'Item B5' },
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
