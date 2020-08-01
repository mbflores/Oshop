import { Component } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AuthService} from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'oshop';
  constructor(public authService: AuthService) {
  }
}
