import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IComment } from '../shared/models/comments';
import { IPost } from '../shared/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  post$: Observable<IPost[] | any>;
  comment$: Observable<IComment[] | any>;

  constructor(private db: AngularFirestore) {}

  getPosts() {
    return this.post$ = this.db.collection('posts').valueChanges();
  }

  getPost(postId: string) {
    return this.post$ = this.db.collection(`posts/${postId}`).valueChanges();
  }

  getComments() {
    return this.comment$ = this.db.collection('comments').valueChanges();
  }
}
