import { Component } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from './Services/auth.service';
import {Router} from '@angular/router';
import {UserService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oshop';
  constructor(public authService: AuthService, private router: Router, private userService: UserService) {
    authService.user$.subscribe(user => {
      if (user) {
        const returnUrl = localStorage.getItem('returnUrl');
        userService.save(user);
        router.navigateByUrl(returnUrl);
      }
    });
  }
}
