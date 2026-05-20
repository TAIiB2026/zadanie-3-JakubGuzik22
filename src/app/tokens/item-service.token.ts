import { InjectionToken } from '@angular/core';
import { ItemService } from '../models/item-service';

export const ITEM_SERVICE_TOKEN = new InjectionToken<ItemService>('ItemService');