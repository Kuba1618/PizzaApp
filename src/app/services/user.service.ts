import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { BehaviorSubject, iif, Observable, ReplaySubject } from 'rxjs';
import { Users } from '../User/Users';
import { WebService } from './webService/web.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: Users = {
    login: '',
    email: '',
    password: ''
  };

  logedUser: any;
  isLoggedUser: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(private webService: WebService) { 
  
  }

  createUser(user: Users){
    this.user = user;
    return this.webService.post('users',  user )  
  }

  logIn(credentials: any):Observable<any>{
    return this.webService.post('login', {
      login: credentials.login,
      password: credentials.password
    })
  }

  isLogged(il: boolean){
      this.isLoggedUser.next(il)
      return this.isLoggedUser
    }
  
  logout(){
    localStorage.clear();
    this.isLoggedUser.next(false);
    this.user = {
      login: '',
      email: '',
      password: ''
    };
    
  }

  checkForLogin(){
    this.isLoggedUser.next(true);
  }
  
}

