import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>;
  userDetails: firebase.User = null;

  isLoggedIn(): boolean {
    if (this.userDetails !== null) {
      return true;
    }
  }

  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router) {

    this.user = firebaseAuth.authState;
    this.user.subscribe(user => {
      if (user) {
        this.userDetails = user;
      } else {
        this.userDetails = null;
      }
    })

  }

  login(data: { email: string, password: string }) {
    return this.firebaseAuth.auth.signInWithEmailAndPassword(data.email, data.password)
      .then((userCredential) => {
        this.router.navigate(['/home']);
      })
  }

  register(data: { displayName: string, email: string, password: string, repeatPass: string }) {
    return this.firebaseAuth.auth.createUserWithEmailAndPassword(
      data.email,
      data.password
    ).then((userCredential) => {
      userCredential.user.updateProfile({
        displayName: data.displayName,
      });
      this.router.navigate(['/login']);
    })
      .catch((error) => {
        console.log(error);
      });
  }

  logout() {
    this.firebaseAuth.auth.signOut()
      .then(res => this.router.navigate(['/home']));
  }

}













