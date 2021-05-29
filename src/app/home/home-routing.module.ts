import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BurgerMenuComponent } from '../burger-menu/burger-menu.component';
import { CardComponent } from '../card/card/card.component';
import { AuthGuard } from '../guards/auth.guard';
import { LoginComponent } from '../login-and-register/login/login.component';
import { RegisterComponent } from '../login-and-register/register/register.component';
import { ShoppingcartComponent } from '../shoppingcart/shoppingcart.component';
import { HomeComponent } from './home.component';
import { AdminComponent } from '../admin/admin.component';
import { ListComponent } from '../admin/list/list.component';
import { CreateComponent } from '../admin/create/create.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent }
    ]
  },
  { path: 'card', component: ShoppingcartComponent, canActivate: [AuthGuard] },
  { path: 'burgermenu', component: BurgerMenuComponent },
  { path: 'pay', component: CardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin', loadChildren: () =>
      import('../admin/admin.module').then((m) => m.AdminModule), canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
