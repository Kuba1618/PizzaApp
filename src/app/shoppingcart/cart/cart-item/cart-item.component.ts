import { Component, Input, OnInit } from '@angular/core';
import { MessangerService } from '../../../services/messanger.service';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input() cartItem: any

  constructor(private orderService: OrderService) { }

  ngOnInit(): void {

  }

}
