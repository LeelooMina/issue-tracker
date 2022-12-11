import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './shared/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'issue-tracker';
  items: Observable<any[]>;

  constructor(
    firestore: AngularFirestore,
    private authService: AuthService){
    this.items = firestore.collection('items').valueChanges();

  }



  ngOnInit(): void {
   this.authService.autoLogin()
  }
}

