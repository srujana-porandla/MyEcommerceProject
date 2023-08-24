import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule } from '@angular/common/http';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductCategoryMenuComponent } from './components/product-category-menu/product-category-menu.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { SearchComponent } from './components/search/search.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductCategoryMenuComponent,
    ContactusComponent,
    AboutusComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
