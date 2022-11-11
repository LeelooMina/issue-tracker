import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SignInComponent implements OnInit {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  placeHolderEmail: string = this.isLoginMode ? "Your email address" : "you@test.com"
  placeHolderPass: string = 'Make it a good one'

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmitAuth(authForm: NgForm) {


    if (!authForm.valid){
      this.isLoading = false;
      return;
    }

    this.isLoading = true;

    let email = authForm.value.email
    let password = authForm.value.password
    this.authService.signUp(email, password).subscribe(resData => {
      console.log(resData)
      this.isLoading = false;
    }, error => {
      console.log(error)
      this.isLoading = false;
    })
    authForm.reset();
  }


  constructor(public authService: AuthService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params['id'])
      if(params['id'] === 'in'){
        this.isLoginMode = true;
      }
      else if(params['id'] === 'up'){
        this.isLoginMode = false;
      }

  })
  }
}
