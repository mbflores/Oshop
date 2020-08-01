import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { User } from 'firebase';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService) {
  }

  ngOnInit(): void {
  }

  logOut(): void{
    this.auth.logOut();
  }

}
