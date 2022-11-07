import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SignInComponent implements OnInit {

  onSubmitAuth(authForm: NgForm) {
    if (!authForm.valid){
      return;
    }
    let email = authForm.value.email
    let password = authForm.value.password
    this.authService.signUp(email, password)
    authForm.reset();
  }


  constructor(public authService: AuthService) {}
  ngOnInit() {}
}
