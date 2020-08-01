import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { User } from 'firebase';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user;
  constructor(private auth: AuthService, private router: Router) {
    auth.AppUser$.subscribe(user => this.user = user);
  }

  ngOnInit(): void {
  }

  logOut(): void{
    this.auth.logOut();
    this.router.navigateByUrl('/');
  }

}
