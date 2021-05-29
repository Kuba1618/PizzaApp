import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Pizza } from 'src/app/models/pizza';
import { PizzaAddService } from './pizza-add.service';



@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  credentials = this.formBuilder.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required, Validators.minLength(5)]]
  })

  constructor(private formBuilder: FormBuilder,private pizzaAddService: PizzaAddService) { }

  ngOnInit(): void {

  }
  async createPizza() {
    const pizzaData = {
      name: this.credentials.controls.name.value,
      description: this.credentials.controls.description.value
    };
    this.pizzaAddService.addPizza(pizzaData).subscribe(
      async () => {
        setTimeout(() => {
          this.onActive()
        })
      },
      async (res) => {
      }
    );

    
}
onActive() {
  window.location.reload();
}
}
