import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { CommonModule, DatePipe } from '@angular/common';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { FormsModule } from '@angular/forms';
import { ItemListBComponent } from './components/item-list-b/item-list-b.component';
import { ItemListCComponent } from './components/item-list-c/item-list-c.component';
import { ItemBService } from './services/item-b.service';
import { ItemCService } from './services/item-c.service';
import { ITEM_SERVICE_TOKEN } from './tokens/item-service.token';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    ItemFormComponent,
    ItemListBComponent,
    ItemListCComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
