import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login-and-register/login/login.component';
import { RegisterComponent } from './login-and-register/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuListComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
