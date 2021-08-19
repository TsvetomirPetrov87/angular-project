import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostService } from './post.service';
import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './posts/posts.component';



@NgModule({
  declarations: [
    CreatePostComponent,
    PostsComponent
  ],
  imports: [
    CommonModule, 
    PostRoutingModule
  ],
  exports: [
    CreatePostComponent
  ],
  providers: [
    PostService
  ]
})
export class PostModule { }
