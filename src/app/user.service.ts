import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import * as firebase from 'firebase';
import {Observable} from 'rxjs';
import {FirebaseOperation} from '@angular/fire/database/interfaces';
import App = firebase.app.App;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db: AngularFireDatabase) { }

  save(user: firebase.User): void{
    console.log('saving');
    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    });
  }

  getAppUser$(uid: string): Observable<AppUser> {
    const appUser = this.db.object('/users/' + uid).valueChanges() as any;
    return (appUser as Observable<AppUser>);
  }
}
export interface AppUser {
  name: string;
  email: string;
  isAdmin: boolean;
}
