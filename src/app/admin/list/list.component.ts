import { Component, OnInit } from '@angular/core';
import { PizzaService } from './pizza.service';
import { Pizza } from 'src/app/models/pizza';
import { async } from '@angular/core/testing';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  pizzas: Pizza[]=[];
  private id: string = '';

  constructor(
    private pizzaService: PizzaService
  ) { }

  ngOnInit() {
    this.getPizzaList();
  }

  private async getPizzaList() {
  this.pizzaService.getAllPizzas().subscribe(
    async(res)=>{
      this.pizzas=res;
    },
    async(err)=>{
      console.log('Nie udalo sie pobrac listy pizzy')
    }
  )
  };
  delete(id: any){
    console.log(id)
    this.pizzaService.deletePizza(id);
  }



  


}
