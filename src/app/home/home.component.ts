import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {

  images = ['../../assets/img/first.jpg', '../../assets/img/second.jpg', '../../assets/img/first.jpg'];
  isLoggedUser: boolean | undefined;
  infoUser: boolean | undefined;
  constructor(private userService: UserService, config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    
  }
    
  ngOnInit(): void {
    if(localStorage.getItem('user')){
      this.userService.checkForLogin();
    }
    
    this.userService.isLoggedUser.subscribe(
      (res) =>{ 
        this.isLoggedUser = res
      },
      (err) => console.error(err),
      () => console.log('finished lisstenig to logged user')  
    );
  }
  
  toRegister(){
    setTimeout(() =>{
      document.getElementById("register")?.scrollIntoView();
    }) 
  }

  logOut(){
    this.userService.logout();
  }

  
}
