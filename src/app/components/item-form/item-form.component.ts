import { Component, EventEmitter, Output } from '@angular/core';
import { Item } from '../../models/item';
import { ItemDataService } from '../../services/item.service';

@Component({
  selector: 'taiib2-item-form',
  standalone: false,
  templateUrl: './item-form.component.html',
  styles: ``
})
export class ItemFormComponent {
  @Output() itemAdded = new EventEmitter<void>();

  newItem: Item = { id: 0, value: 0, date: new Date(), name: '' };

  constructor(private itemService: ItemDataService) {}

  submit(): void {
    this.itemService.addItem({ ...this.newItem });
    this.itemAdded.emit();
    this.newItem = { id: 0, value: 0, date: new Date(), name: '' };
  }
}
