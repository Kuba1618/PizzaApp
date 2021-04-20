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
import { PizzaListComponent } from './pizza-list/pizza-list.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuListComponent,
    BurgerMenuComponent,
    PizzaListComponent,

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
