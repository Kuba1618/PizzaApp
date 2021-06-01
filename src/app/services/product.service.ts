import { Injectable } from '@angular/core';
import { Product } from '../models/product'


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    new Product(1, 'PIZZA MARGHERITA', 'Mozzarella, ziołowy sos pomidorowy', 25),
    new Product(2, 'Product 2', 'description', 2),
    new Product(3, 'Product 3', 'description', 3),
    new Product(4, 'Product 4', 'description', 4),
    new Product(5, 'Product 5', 'description', 5),
    new Product(6, 'Product 6', 'description', 6)
  ]

  constructor() { }

  getProducts(): Product[] {
    return this.products
  }
}
