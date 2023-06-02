import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
// import { constructor } from 'chartist';
import { type } from 'jquery';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  myRegistratoinForm: FormGroup = new FormGroup({
    email: new FormControl(null),
    password: new FormControl(null),
    passwordRepeat: new FormControl(null)
  })

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  registratoin() {
    const email = this.myRegistratoinForm.value.email
    const password = this.myRegistratoinForm.value.password
    const passwordRepeat = this.myRegistratoinForm.value.passwordRepeat

    if (password === passwordRepeat) {
      this.authService.registration(email, password)

      this.myRegistratoinForm.reset()
    } else {
      alert('Пароли не совпадают')
    }

    this.authService.login(email, password)
    this.myRegistratoinForm.reset()

  }
}


