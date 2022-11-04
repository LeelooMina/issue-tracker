import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    public afAuth: AngularFireAuth // Inject Firebase auth service
  ) {}

  loggedInUser = {
    name: "",
    email: ""
  }

  onSubmitAuth(authForm: NgForm){
    console.log(authForm)
  }



  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }
  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth
      .signInWithPopup(provider)
      .then((result) => {
        this.loggedInUser.name = result.user.displayName;
        this.loggedInUser.email = result.user.email;
        console.log(result);
        console.log(this.loggedInUser)
        console.log('You have been successfully logged in!');
      })
      .catch((error) => {
        console.log(error);
      });
  }


  //logout
}
