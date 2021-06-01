import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PizzaEditService } from './pizza-edit.service'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  private id: string = '60b50de4f06d3a46d422e1f6';

  credentials = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(5)]],
    price: ['', [Validators.required, Validators.minLength(1)]]
  })

  constructor(
    private formBuilder: FormBuilder,
    private pizzaEditService: PizzaEditService
  ) { }

  ngOnInit(): void {

  }

  submit(){
    const pizzaData = {
      name: this.credentials.controls.name.value,
      description: this.credentials.controls.description.value,
      price: this.credentials.controls.price.value
    };
    console.log(this.credentials.value)
    this.pizzaEditService.editPizza(pizzaData, this.id).subscribe((res) => {

    }, (err) => {

    });


  }


}