import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  myForgotForm: FormGroup = new FormGroup({
    email: new FormControl(null),
  })

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  forgot() {
    const email = this.myForgotForm.value.email

    this.authService.forgotPassword(email)
  }
}
