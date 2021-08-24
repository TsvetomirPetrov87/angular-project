import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { IUser } from '../shared/models/user';
import { Observable } from 'rxjs';
import { auth } from 'firebase/app';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>;
  userDetails: firebase.User = null;
  loggedUser = false;

  isLoggedIn(): boolean {
    if(this.userDetails !== null) {
      return true;
    }
  }

  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router) {

    this.user = firebaseAuth.authState;
    this.user.subscribe(user => {
      if(user) {
        this.userDetails = user;
      } else {
        this.userDetails = null;
      }
    })
    
  }

  login(email: string, password: string) {
    const credential = firebase.auth.EmailAuthProvider.credential(
      email,
      password
    )
    return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  register(email: string, password: string) {
   const credential = firebase.auth.EmailAuthProvider.credential(
     email,
     password
   )
   return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
  }

  logout() {
   this.loggedUser = null;
   this.firebaseAuth.auth.signOut()
    .then(res => this.router.navigate(['/home']));
  }

  createUserWithEmailAndPassword(email: string, password: string) {
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(
      email,
      password
    )
  }

  // getLoggedInUser(): IUser {
  //   const loggedUser: IUser = new IUser();
  //   const user = this.firebaseAuth.auth.currentUser;

  //   if(user) {
  //     this.userDetails = user;
  //     if(user !== null) {
  //       loggedUser.username = user.displayName;
  //       loggedUser.email = user.email;
  //       loggedUser.idToken = user.uid;
  //     }
  //   } else {
  //     this.userDetails = null;
  //   }
  //   return loggedUser;
  // }
}







