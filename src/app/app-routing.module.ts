import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ItemListBComponent } from './components/item-list-b/item-list-b.component';
import { ItemListCComponent } from './components/item-list-c/item-list-c.component';
import { ITEM_SERVICE_TOKEN } from './tokens/item-service.token';
import { ItemCService } from './services/item-c.service';
import { ItemBService } from './services/item-b.service';

const routes: Routes = [
  { path: 'items', component: ItemListComponent },
  { path: 'items-b', component: ItemListBComponent },
  { path: 'items-c', component: ItemListCComponent },
  { path: '', redirectTo: 'items', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
