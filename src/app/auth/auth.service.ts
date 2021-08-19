import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { IUser } from '../shared/models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: IUser[] | undefined;

  constructor(private db: AngularFirestore) { }

  get checkIfLogged(): boolean {
    return !this.user;
  }

  login(username: string, password: string) {
    
  }

  register(username: string, email: string, password: string, repeatPass: string) {

  }

  logout() {

  }
}
