import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { PostService } from './post/post.service';
import { IPost } from './shared/models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  get authenticated(): boolean {
    return this.authService.user !== undefined;
  }

   constructor(
     private db: AngularFirestore,
     private authService: AuthService,
    ) {
  }
}
