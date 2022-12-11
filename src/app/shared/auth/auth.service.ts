import { Injectable } from '@angular/core';
import { GoogleAuthProvider } from 'firebase/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { auth } from 'firebaseui';
import { catchError, Subject, tap } from 'rxjs';
import { throwError } from 'rxjs';
import { User } from './user.model';
import { Router } from '@angular/router';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered: boolean;
}


interface GoogleAuthResponseData {}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public afireAuth: AngularFireAuth, private http: HttpClient, private router: Router) {}

  userEmail: any;
  user = new Subject<User>();

  isLoggedin = false;

  loggedInUser = {
    name: '',
    email: '',
  };

  private tokenExpirationTimer: any;



  signUp(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAIMaCTohp56bC1GV0lKRd2ek7ot9VBZbI',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(
        catchError(this.errorHandling),
        tap((respData) => {
          this.handleAuth(
            respData.email,
            respData.localId,
            respData.idToken,
            +respData.expiresIn
          );
        })
      );
  }

  login(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAIMaCTohp56bC1GV0lKRd2ek7ot9VBZbI',
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .pipe(catchError(this.errorHandling), tap((respData) => {
        this.handleAuth(
          respData.email,
          respData.localId,
          respData.idToken,
          +respData.expiresIn
        );
      }));
  }

  autoLogin() {
    const userData: {
      email: string,
      id: string,
      _token: string,
      _tokenExpirationDate: string;
    } = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
      return;
    }
    const loadedUser = new User(
      userData.email,
      userData.id,
      userData._token,
      new Date(userData._tokenExpirationDate)
    );
    if (loadedUser.token) {
      this.user.next(loadedUser);
      const expirationDuration =
        new Date(userData._tokenExpirationDate).getTime() -
        new Date().getTime()
      this.autoLogout(expirationDuration);
    }
  }

  autoLogout(expirationDuration: number) {
    this.tokenExpirationTimer = setTimeout(() => {
      this.logout();
    }, expirationDuration);
  }

  logout(){
    this.user.next(null);
    this.router.navigate(['/sign/out'])
    if (this.tokenExpirationTimer) {
      clearTimeout(this.tokenExpirationTimer);
    }
    this.tokenExpirationTimer = null;
  if (this.tokenExpirationTimer) {
    clearTimeout(this.tokenExpirationTimer);
  }
  this.tokenExpirationTimer = null;
}


  private handleAuth(
    email: string,
    userID: string,
    token: string,
    expiresIn: number
  ) {
    const expirationDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(
      email,
      userID,
      token,
      expirationDate);

      this.userEmail = user.email;

    this.user.next(user);
    this.autoLogout(expiresIn * 1000);
    localStorage.setItem('userData', JSON.stringify(user));
  }

  private errorHandling(errorRes: HttpErrorResponse) {
    let errorMessage = 'An unknown error occured';

    if (!errorRes.error || !errorRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errorRes.error.error.message) {
      case 'EMAIL_EXISTS':
        errorMessage = 'This email already exists';
        break;
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'This email does not exist.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'This password is incorrect';
        break;
    }
    return throwError(errorMessage);
  }

  // Sign in with Google
  GoogleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  // Google User Model:

// displayName, email, emailVerified, isAnonymous

// metadata, phoneNumber, photoURL, providerData


// providerId, refreshToken, tenantId, uid


  AuthLogin(provider) {
    return this.afireAuth
      .signInWithPopup(provider)
      .then((result) => {

       this.userEmail = result.additionalUserInfo.profile['email'];

       console.log(this.userEmail)

        const user = new User(
          result.user.email,
          result.user.uid,
          result.user.refreshToken);


          this.user.next(user);
        this.router.navigate(['/projects'])
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //logout
}
