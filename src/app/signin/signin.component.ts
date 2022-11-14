import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(public authService: AuthService, private route: ActivatedRoute) {}

  isLoginMode: boolean = true;
  isLoading: boolean = false;
  placeHolderEmail: string;
  placeHolderPass: string;
  error: string = null;

  // Changes the mode of the signin/login form
  // Switches placeholder text

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
    this.isLoginMode
      ? (this.placeHolderPass = "That's the combo on my luggage!")
      : (this.placeHolderPass = 'Make it a good one!');
    this.isLoginMode
      ? (this.placeHolderEmail = 'Your email address')
      : (this.placeHolderEmail = 'you@test.com');
  }

  onSubmitAuth(authForm: NgForm) {
    if (!authForm.valid) {
      this.isLoading = false;
      return;
    }
    this.isLoading = true;

    let email = authForm.value.email;
    let password = authForm.value.password;

    let authObs: Observable<AuthResponseData>;

    if (this.isLoginMode) {
      authObs = this.authService.login(email, password)
    } else {
      authObs = this.authService.signUp(email, password)
    }

      authObs.subscribe(
        resData => {
          console.log(resData);
          this.isLoading = false;
        },
        (errorMessage) => {
          console.log(errorMessage);

          this.error = errorMessage;
          this.isLoading = false;
        }
      )

      authForm.reset();

    }  

  ngOnInit() {
    this.route.params.subscribe((params) => {
      console.log(params['id']);
      if (params['id'] === 'in') {
        this.isLoginMode = true;
        this.placeHolderPass = "That's the combo on my luggage!";
        this.placeHolderEmail = 'Your email address';
      } else if (params['id'] === 'up') {
        this.isLoginMode = false;
        this.placeHolderPass = 'Make it a good one!';
        this.placeHolderEmail = 'you@test.com';
      }
    });
  }
}
