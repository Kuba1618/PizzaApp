import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  credentials = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    surname: ['', [Validators.required, Validators.minLength(3)]],
    city: ['', [Validators.required, Validators.minLength(3)]],
    post_code: ['', [Validators.required, Validators.minLength(3)]],
    street: ['', [Validators.required, Validators.minLength(3)]],
    houseNumber: ['', [Validators.required, Validators.minLength(3)]],
  })

  amount: any;

  constructor(private formBuilder: FormBuilder, private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.amountToPay.subscribe((res) => {
      this.amount = res;
    })
  }

}
