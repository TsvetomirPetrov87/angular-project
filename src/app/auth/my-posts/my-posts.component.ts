import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { PostService } from 'src/app/post/post.service';
import { IPost } from 'src/app/shared/models/post';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent {

  //да се направи сортиране спрямо userId

  posts: IPost[] | any;

  // get isLoggedIn(): boolean {
  //   return this.authService.isLoggedIn;
  // }

  constructor(
    private db: AngularFirestore,
    private authService: AuthService,
    private postService: PostService) {

    // this.posts = undefined;
    // this.postService.getPosts().subscribe(posts => this.posts = posts)
      
  }
}
