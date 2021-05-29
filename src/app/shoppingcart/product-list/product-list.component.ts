import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service'
import { Product } from 'src/app/models/product'
import { PizzaService } from 'src/app/admin/list/pizza.service';
import { Pizza } from 'src/app/models/pizza';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productsList: Product[] = [];
  pizzas: Pizza[] = [];

  constructor(private productService: ProductService,
    private pizzaService: PizzaService) { }

  ngOnInit(): void {
    this.productsList = this.productService.getProducts()
    this.getPizzaList();
  }

  private async getPizzaList() {
    this.pizzaService.getAllPizzas().subscribe(
      async (res) => {
        this.pizzas = res;
      },
      async (err) => {
        console.log('Nie udalo sie pobrac listy pizzy')
      }
    )
  };

}
