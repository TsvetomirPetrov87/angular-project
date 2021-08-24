import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './login/login.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
        // canActivate: [AuthGuard],
        // data : {
        //     authActivate: false,
        //     authFailedActivateUrl: '/'
        // }
    },
    {
        path: 'register',
        component: RegisterComponent,
        // canActivate: [AuthGuard],
        // data : {
        //     authActivate: false,
        //     authFailedActivateUrl: '/'
        // }
    },
    {
        path: 'my-posts/:id',
        component: MyPostsComponent,
        // canActivate: [AuthGuard],
        // data : {
        //     authActivate: true,
        //     authFailedActivateUrl: '/login'
        // }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AuthRoutingModule { }
  