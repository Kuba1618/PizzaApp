import { ThrowStmt } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Users } from 'src/app/User/Users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users: any;
  

  loginForm = this.formBuilder.group({
    login: ['', [Validators.required, Validators.minLength(6)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  constructor(private userService: UserService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.userService.logIn(this.loginForm).subscribe(
      (res) =>{
        this.users = res
         console.log(res)
      }, (err) =>{
        console.log(err);
      }
    )
  }

 

}
