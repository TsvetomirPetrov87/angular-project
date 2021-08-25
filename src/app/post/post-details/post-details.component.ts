import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
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
  post: IPost | any;
  postId: string;

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private db: AngularFirestore
  ) { 

    const id = this.activatedRoute.snapshot.params['postId'];
    this.postService.getPostById(id).subscribe(post => this.post = post.data());

   }

}

// this.db.collection('posts').get().toPromise().then((snapshot) => {
    //   snapshot.forEach((doc) => {
    //     console.log(doc.id);
        
    //   })
    //   console.log(snapshot.docs);
    // })
