import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessangerService } from 'src/app/services/messanger.service'
import { convertToObject } from 'typescript';
import { OrderService } from '../../services/order.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: any[] = [];
  cartTotal = 0

  constructor(private msg: MessangerService, private orderService: OrderService) { }

  ngOnInit(): void {

    this.msg.getMsg().subscribe((product: Product) => {
      this.addProductToCart(product)
    })

  }

  addProductToCart(product: Product) {

    let prouctExists = false



    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++
        prouctExists = true
        break;
      }
    }

    if (!prouctExists) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      })
    }




    this.cartTotal = 0
    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
      this.orderService.amountToPay.next(this.cartTotal)
    })

  }

}
