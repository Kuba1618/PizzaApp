import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  credentials = this.formGroup.group({
    name: '',
    description: '',
    price: ''
  })
  
  constructor(private formGroup: FormBuilder) { }  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
  editPizza() {
  }


}