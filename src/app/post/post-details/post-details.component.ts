import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPost } from 'src/app/shared/models/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent {

  posts: IPost[] | any;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute
  ) { 
    
    const id = this.activatedRoute.snapshot.params['postId'];
    this.postService.getPost(id).subscribe(posts => this.posts = posts)
  }

  
}
