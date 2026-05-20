import { Item } from "./item";

export interface ItemService {
  getItems(): Item[];
  deleteItem(id: number): void;
  addItem(item: Item): void;
}
