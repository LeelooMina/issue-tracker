import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SignInComponent implements OnInit {

  isLoading = false;

  onSubmitAuth(authForm: NgForm) {

    this.isLoading = true;

    if (!authForm.valid){
      this.isLoading = false;
      return;
    }
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


  constructor(public authService: AuthService) {}
  ngOnInit() {}
}
