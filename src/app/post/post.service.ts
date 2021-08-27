import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { IPost } from '../shared/models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  post$: Observable<IPost[] | any>;
  data: IPost;
  fileToUpload: File | null = null;

  constructor(
    private db: AngularFirestore,
    private authService: AuthService,
    private storage: AngularFireStorage
  ) { }

  getPosts() {
    return this.post$ = this.db.collection('posts').get();
  }

  getPostById(postId: string) {
    return this.post$ = this.db.collection('posts').doc(postId).get();
  }

  savePost(data: any) {
    const filePath = `images/${this.fileToUpload.name}`;
    const fileRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, this.fileToUpload);

    return uploadTask.snapshotChanges().toPromise().then(() => {
      return fileRef.getDownloadURL().toPromise().then((url) => {
        console.log(url)

        return this.db.collection('posts').add({
          title: data.title,
          author: this.authService.userDetails.displayName,
          publishedDate: (new Date()).toISOString(),
          language: data.language,
          content: data.content,
          imageUrl: url,
          userId: this.authService.userDetails.uid
        })
          .then((postRef) => {
            console.log("Post written with ID: ", postRef.id);
          })
          .catch((error) => {
            console.error("Error adding post: ", error);
          })
      })
    });
  }

  getMyPosts() {
    return this.db.collection('posts').ref.where("userId", "==", this.authService.userDetails.uid).get();
  }
}
