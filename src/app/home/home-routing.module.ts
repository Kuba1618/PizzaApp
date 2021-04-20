import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BurgerMenuComponent } from '../burger-menu/burger-menu.component';
import { CardComponent } from '../card/card/card.component';
import { AuthGuard } from '../guards/auth.guard';
import { LoginComponent } from '../login-and-register/login/login.component';
import { RegisterComponent } from '../login-and-register/register/register.component';
import { PizzaListComponent } from '../pizza-list/pizza-list.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, children: [
    { path: 'register', component: RegisterComponent},
    { path: 'login', component: LoginComponent} 
  ]},
  { path: 'card', component: CardComponent, canActivate: [AuthGuard]},
  { path: 'pizzalist', component: PizzaListComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
