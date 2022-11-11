import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showBurgerMenu: boolean;
  isLoggedin = this.authService.isLoggedin;

  onClick(){
    this.isLoggedin = !this.isLoggedin;
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
