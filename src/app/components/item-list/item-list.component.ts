import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { ItemDataService } from '../../services/item.service';

@Component({
  selector: 'taiib2-item-list',
  standalone: false,
  templateUrl: './item-list.component.html',
  styles: ``
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];
  showForm = false;

  constructor(private itemService: ItemDataService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(): void {
    this.items = this.itemService.getItems();
  }

  deleteItem(id: number): void {
    this.itemService.deleteItem(id);
    this.loadItems();
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  onItemAdded(): void {
    this.loadItems();
    this.showForm = false;
  }
}