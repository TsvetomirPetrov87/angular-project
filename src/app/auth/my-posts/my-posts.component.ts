import { Component } from '@angular/core';
import { PostService } from 'src/app/post/post.service';
import { IPost } from 'src/app/shared/models/post';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent {

  posts: IPost[] | any;

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  constructor(
    private authService: AuthService,
    private postService: PostService) {

    this.posts = undefined;
    this.postService.getMyPosts().then(posts => this.posts = posts.docs);

  }
}
