import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { SocialAuthService } from 'angularx-social-login';
import { Observable } from 'rxjs';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import { AuthenticationService } from '../services/authentication.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  isLoggedUser: any;
  cartTotal: any;
  amount: any;
  constructor(private config: NgbCarouselConfig, private authService: AuthenticationService, private socialAuthService: SocialAuthService, private orderService: OrderService) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;

  }

  ngOnInit(): void {
    this.authService.isAuthenticated.subscribe((res) => {
      this.isLoggedUser = res;
    })

    this.orderService.amountToPay.subscribe((res) => {
      this.cartTotal = res;
    })
  }

  ngOnChanges(): void {
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
