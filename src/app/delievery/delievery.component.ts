import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { OrderService } from '../services/order.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-delievery',
  templateUrl: './delievery.component.html',
  styleUrls: ['./delievery.component.css']
})
export class DelieveryComponent implements OnInit {
  [x: string]: any;

  cartTotal: any;
  isLoggedUser!: boolean;
  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService, private orderService: OrderService) { }

  credentials = this.formBuilder.group({
    city: ['', [Validators.required, Validators.minLength(3)]],
    street: ['', [Validators.required, Validators.minLength(3)]],
    houseNumber: ['', [Validators.required, Validators.minLength(3)]],
  })


  ngOnInit(): void {
    this.authService.isAuthenticated.subscribe((res) => {
      this.isLoggedUser = res;
    }, (err) => {
      console.log(err)
    })

    this.orderService.amountToPay.subscribe((res) => {
      this.cartTotal = res;
    })
  }

  logOut() {
    this.authService.logout()
  }

}
