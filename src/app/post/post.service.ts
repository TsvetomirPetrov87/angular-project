import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IPost } from '../shared/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  post$: Observable<IPost[] | any>;

  constructor(private db: AngularFirestore) { }

  getPosts() {
    return this.post$ = this.db.collection('posts').get();
  }

  getPostById(postId: string) {
    return this.post$ = this.db.collection('posts').doc(postId).get();
  }

  savePost(data: any) {
    return this.db.collection('posts').add({
      title: '',
      author: '',
      publishedDate: '',
      content: ''
    })
      .then((postRef) => {
        console.log("Post written with ID: ", postRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  }
}
