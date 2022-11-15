import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../shared/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  private userSub: Subscription;

  showBurgerMenu: boolean;
  isLoggedin: boolean = false;

  onClick(){
    this.isLoggedin = !this.isLoggedin;
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isLoggedin = !user ? false : true;
    })
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

}
