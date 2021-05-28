import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { CardComponent } from './card/card/card.component';
import { BurgerMenuComponent } from './burger-menu/burger-menu.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { FiltersComponent } from './shoppingcart/filters/filters.component';
import { ProductListComponent } from './shoppingcart/product-list/product-list.component';
import { CartComponent } from './shoppingcart/cart/cart.component';
import { CartItemComponent } from './shoppingcart/cart/cart-item/cart-item.component';
import { ProductItemComponent } from './shoppingcart/product-list/product-item/product-item.component';
import { AdminComponent } from './admin/admin.component';
import { ListComponent } from './admin/list/list.component';
import { CreateComponent } from './admin/create/create.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuListComponent,
    BurgerMenuComponent,
    ShoppingcartComponent,
    FiltersComponent,
    ProductListComponent,
    CartComponent,
    CartItemComponent,
    ProductItemComponent,
    AdminComponent,
    ListComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
