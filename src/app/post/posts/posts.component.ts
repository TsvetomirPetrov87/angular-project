import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
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

  get checkIfLogged(): boolean {
    return this.authService.checkIfLogged;
  }

  constructor(
    private db: AngularFirestore,
    private authService: AuthService,
    private postService: PostService) {

    this.posts = undefined;
    this.postService.getPosts().subscribe(posts => this.posts = posts)
      
  }

  
}
