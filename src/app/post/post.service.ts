import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { IPost } from '../shared/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  post$: Observable<IPost[] | any>;
  data: IPost[];

  constructor(
    private db: AngularFirestore,
    private authService: AuthService
    ) { }

  getPosts() {
    return this.post$ = this.db.collection('posts').get();
  }

  getPostById(postId: string) {
    return this.post$ = this.db.collection('posts').doc(postId).get();
  }

  savePost(data: any) {
    return this.db.collection('posts').add({
      title: data.title,
      author: data.author,
      publishedDate: data.publishedDate,
      language: data.language,
      content: data.content,
      userId: this.authService.userDetails.uid
    })
      .then((postRef) => {
        console.log("Post written with ID: ", postRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }

  getMyPosts(userId: string) {
    return this.post$ = this.db.collection('posts').doc(userId).get();
    
   
  }
}