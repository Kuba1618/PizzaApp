import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  authService: any;
  socialAuthService: any;
  isLoggedUser: any;
  orderService: any;
  cartTotal: any;

  constructor() { }

  ngOnInit(): void {
    this.authService.isAuthenticated.subscribe((res: any) => {
      this.isLoggedUser = res;
    })

    this.orderService.amountToPay.subscribe((res: any) => {
      this.cartTotal = res;
    })
  }

  toRegister() {
    setTimeout(() => {
      document.getElementById("register")?.scrollIntoView();
    })
  }

  logOut() {
    this.authService.logout();
    this.socialAuthService.signOut();

  }

}
