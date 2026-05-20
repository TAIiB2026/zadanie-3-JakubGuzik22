import { Component, OnInit, Inject } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from '../../models/item-service';
import { ITEM_SERVICE_TOKEN } from '../../tokens/item-service.token';
import { FormHideCounterService } from '../../services/form-hide-counter.service';
import { ItemCService } from '../../services/item-c.service';


@Component({
  selector: 'taiib2-item-list-c',
  standalone: false,
  templateUrl: './item-list-c.component.html',
    providers: [
    FormHideCounterService,
    { provide: ITEM_SERVICE_TOKEN, useExisting: ItemCService }
  ],
})
export class ItemListCComponent implements OnInit {
  items: Item[] = [];
  showForm = false;

   constructor(
    @Inject(ITEM_SERVICE_TOKEN) private itemService: ItemService,
    public counterService: FormHideCounterService
  ) {}

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
    if (this.showForm) {
      this.counterService.increment();  // inkrementuj tylko przy ukryciu
    }
    this.showForm = !this.showForm;
  }

  onItemAdded(): void {
    this.loadItems();
    this.showForm = false;
    this.counterService.increment();  // ukrycie po dodaniu też się liczy
  }
}