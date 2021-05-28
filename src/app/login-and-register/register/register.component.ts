import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { iif, Observable } from 'rxjs';
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


  constructor(private formBuilder: FormBuilder, private router: Router) {

  }

  ngOnInit(): void {

  }

  createNewUser() {


    this.router.navigate(['home']);
    setTimeout(() => {
      this.onActive()
    })
  }

  onActive() {
    window.scroll(0, 0)
  }


}
