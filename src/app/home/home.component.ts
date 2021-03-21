import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  images = ['../../assets/img/first.jpg', '../../assets/img/second.jpg', '../../assets/img/first.jpg'];

  constructor() { }

  ngOnInit(): void {
  }

  toRegister(){
    setTimeout(() =>{
      document.getElementById("register")?.scrollIntoView();
    })
    
  }

}
