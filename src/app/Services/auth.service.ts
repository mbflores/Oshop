import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {Observable, of} from 'rxjs';
import { User } from 'firebase';
import * as firebase from 'firebase';
import GoogleAuthProvider = firebase.auth.GoogleAuthProvider;
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {AppUser, UserService} from '../user.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;
  constructor(private af: AngularFireAuth, private route: ActivatedRoute, private userService: UserService) {
    this.user$ = af.authState;
  }

  logOut(): void {
    this.af.signOut();
  }

  login(): void {
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.af.signInWithPopup(new GoogleAuthProvider());
  }

  get AppUser$(): Observable<AppUser> {
    return this.user$.pipe(switchMap(user => {
      if (user) { return  this.userService.getAppUser$(user.uid); }
      return of(null);
    }));
  }
}
