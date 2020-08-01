import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import * as firebase from 'firebase';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;
  constructor(private af: AngularFireAuth) {
    this.user$ = af.authState;
  }

  logOut(): void {
    this.af.signOut();
  }

  login(): void {
    this.af.signInWithPopup(new GoogleAuthProvider());
  }
}
