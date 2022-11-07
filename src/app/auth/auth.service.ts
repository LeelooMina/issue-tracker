import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { formatCurrency } from '@angular/common';
import { auth } from 'firebaseui';

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

interface GoogleAuthResponseData {

}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public afireAuth: AngularFireAuth, private http: HttpClient) {}

  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAIMaCTohp56bC1GV0lKRd2ek7ot9VBZbI',
      {
        email: email,
        password: password,
        returnSecureToken: true,
      }
    )
  }

  loggedInUser = {
    name: '',
    email: '',
  };



  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afireAuth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        console.log(this.loggedInUser);
        console.log('You have been successfully logged in!');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //logout
}
