import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Injectable, OnInit } from '@angular/core';
import { GoogleAuthProvider, getAuth, onAuthStateChanged } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  authenticated = false
  userData = "Current user"

  constructor
    (
      private angularFireAuth: AngularFireAuth,
      private router: Router,
    ) { }

  ngOnInit() {
  }

  registration(email: string, password: string) {
    this.angularFireAuth.createUserWithEmailAndPassword(email, password)
    try {
      // console.log(res.user?.uid)
      this.login(email, password)
    } catch (error) {
      console.log(error.message)
    }
  }

  login(email: string, password: string) {
    const res = this.angularFireAuth.signInWithEmailAndPassword(email, password)
    try {
      console.log('log in')
      console.log(res)
      this.router.navigate(['dashboard'])
    } catch (error) {
      console.log(error.message)
    }
  }

  singInWithGoogle() {
    try {
      return this.angularFireAuth.signInWithPopup(new GoogleAuthProvider)
      .then(() => this.router.navigate(['dashboard']))
      } catch (error) {
      console.log(error.message)
    }
  }

  logout() {
    this.angularFireAuth.signOut()
    try {
      // console.log('log out')
      this.router.navigate(['/login'])
      this.authenticated = false
      this.userData = null
    } catch (error) {
      console.log(error.message)
    }
  }

  forgotPassword(email: string) {
    this.angularFireAuth.sendPasswordResetEmail(email)
    try {
      this.router.navigate(['/auth'])
      alert('Check your email')
    } catch (error) {
      console.log(error.message)
    }
  }

}
