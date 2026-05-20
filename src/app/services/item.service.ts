import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { ItemService } from '../models/item-service';
import { InfoService } from './info.service';

@Injectable({
  providedIn: 'root'
})
export class ItemDataService implements ItemService {

  constructor(private infoService: InfoService) {
    this.infoService.updateLastInstance();  // data utworzenia instancji
  }

  private items: Item[] = [
    { id: 1, value: 100, date: new Date('2024-01-01'), name: 'Item One' },
    { id: 2, value: 200, date: new Date('2024-02-01'), name: 'Item Two' },
    { id: 3, value: 300, date: new Date('2024-03-01'), name: 'Item Three' },
    { id: 4, value: 400, date: new Date('2024-04-01'), name: 'Item Four' },
    { id: 5, value: 500, date: new Date('2024-05-01'), name: 'Item Five' },
  ];

  // getItems(): Item[] {
  //   return this.items;
  // } //do zadania 7

    getItems(): Item[] {
    this.infoService.updateLastFetch();     // data ostatniego pobrania
    return this.items;
  }

  deleteItem(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }

  addItem(item: Item): void {
    this.items.push(item);
  }
}
