import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostService } from './post.service';
import { PostRoutingModule } from './post-routing.module';
import { PostsComponent } from './posts/posts.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreatePostComponent,
    PostsComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule, 
    PostRoutingModule,
    FormsModule
  ],
  exports: [
    PostsComponent,
    CreatePostComponent, 
    PostDetailsComponent,
    FormsModule
  ],
  providers: [
    PostService
  ]
})
export class PostModule { }
