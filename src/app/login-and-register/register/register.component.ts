import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { iif, Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { Users } from 'src/app/User/Users';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: any;
  isRegistered = false;

  registerForm = this.formBuilder.group({
    login: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) { 
    
  }

  ngOnInit(): void {
    
  }

    createNewUser(){
      this.user = this.registerForm.value
      this.userService.createUser(this.user).subscribe((res) =>{
        this.isRegistered = true;
        localStorage.setItem('user', JSON.stringify(this.userService.user.login))
        this.userService.isLogged(true);
        setTimeout( () =>{
          this.router.navigate(['home']);
          this.onActive()
        }, 5000)
        
          
      }, (err)=>{
        console.log(err);
      })
    }

    onActive(){
      window.scroll(0,0)
    }

    
}
