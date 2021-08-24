import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IPost } from '../shared/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  post$: Observable<IPost[] | any>;

  constructor(private db: AngularFirestore) {}

  getPosts() {
    return this.post$ = this.db.collection('posts').valueChanges();
  }

  getPost(postId: string) {
    return this.post$ = this.db.collection(`posts/${postId}`).valueChanges();
  }

  savePost(data: any) {
    
  }
}
