import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { IPost } from 'src/app/shared/models/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  posts: IPost[] | any;

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  constructor(
    private authService: AuthService,
    private postService: PostService) {

    this.posts = undefined;
    this.postService.getPosts().subscribe(posts => this.posts = posts.docs);

  }

}
