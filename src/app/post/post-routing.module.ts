import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/guards/auth.guard';
import { CreatePostComponent } from './create-post/create-post.component';
import { PostsComponent } from './posts/posts.component';


const routes: Routes = [
    {
        path: 'posts',
        component: PostsComponent,
    },
    {
        path: 'create-post',
        component: CreatePostComponent,
        canActivate: [AuthGuard],
        data : {
            authActivate: true,
        }
    },
   
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PostRoutingModule { }
  