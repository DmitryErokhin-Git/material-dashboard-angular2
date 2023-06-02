import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
// import { constructor } from 'chartist';
import { type } from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  myLoginForm: FormGroup = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null),
  })

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  login() {
    const email = this.myLoginForm.value.email
    const password = this.myLoginForm.value.password

    this.authService.login(email, password)
    this.myLoginForm.reset()
  }

  singInWithGoogle() {
    this.authService.singInWithGoogle()
  }
}


