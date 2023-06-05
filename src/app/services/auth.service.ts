import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable, OnInit } from '@angular/core';
import { GoogleAuthProvider, getAuth, onAuthStateChanged } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  authenticated = false
  userData = ""

  constructor
    (
      private angularFireAuth: AngularFireAuth,
      private router: Router,
    ) { }

  ngOnInit() {
  }

  async registration(email: string, password: string) {
    try {
      await this.angularFireAuth.createUserWithEmailAndPassword(email, password)
      this.login(email, password)
    } catch (error) {
      console.log(error.message)
    }
  }

  async login(email: string, password: string) {
    try {
      const res = await this.angularFireAuth.signInWithEmailAndPassword(email, password)
      console.log('log in')
      this.userData = res.user.email
      this.router.navigate(['dashboard'])
    } catch (error) {
      console.log(error.message)
    }
  }

  async singInWithGoogle() {
    try {
      const res = await this.angularFireAuth.signInWithPopup(new GoogleAuthProvider)
      this.router.navigate(['dashboard'])
      this.userData = res.user.email
      } catch (error) {
      console.log(error.message)
    }
  }

  async logout() {
    try {
      await this.angularFireAuth.signOut()
      this.router.navigate(['/login'])
      this.authenticated = false
      this.userData = null
    } catch (error) {
      console.log(error.message)
    }
  }

  async forgotPassword(email: string) {
    try {
      await this.angularFireAuth.sendPasswordResetEmail(email)
      this.router.navigate(['/auth'])
      alert('Check your email')
    } catch (error) {
      console.log(error.message)
    }
  }

}
