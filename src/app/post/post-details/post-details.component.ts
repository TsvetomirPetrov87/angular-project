import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { IPost } from 'src/app/shared/models/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {

  posts: IPost[] | any;
  post: IPost | any;
  postId: string;
  userClapsCount: number;

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  constructor(
    private postService: PostService,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
  ) {

    this.postId = this.activatedRoute.snapshot.params['postId'];
    this.postService.getPostById(this.postId).subscribe(post => {
      this.post = post.data();
      this.post.claps = this.post.claps || [];
      this.userClapsCount = this.authService.userDetails ?
        this.post.claps.filter(clap => clap === this.authService.userDetails.uid).length : 0;
    });
  }

  clap(): void {
    this.post.claps.push(this.authService.userDetails.uid);
    this.userClapsCount++;
    this.postService.updatePostClaps(this.postId, this.post.claps)
  }
}
