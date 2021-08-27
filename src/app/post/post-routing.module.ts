import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsComponent } from './posts/posts.component';


const routes: Routes = [
    {
        path: 'posts',
        component: PostsComponent,
    },
    {
        path: 'create-post',
        component: CreatePostComponent,
    },
    {
        path: 'post-details/:postId',
        component: PostDetailsComponent,
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class PostRoutingModule { }
