import { Component, OnInit } from '@angular/core';
import { PizzaService } from './pizza.service';
import { Pizza } from 'src/app/models/pizza';


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

  private getPizzaList() {
  this.pizzaService.getAllPizzas().subscribe(
    (res)=>{
      this.pizzas=res;
    },
    async(err)=>{
      console.log('Nie udalo sie pobrac listy pizzy')
    }
  )
  };

  delete(id: any){
    this.pizzaService.deletePizza(id).subscribe(
      () => this.getPizzaList(),
      () => this.getPizzaList(),
      () => this.getPizzaList()
    );
  }

  sendId(id:any){
    
  }

}
