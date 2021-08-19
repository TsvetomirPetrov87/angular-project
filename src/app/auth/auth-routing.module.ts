import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


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
        path: 'user-profile/:id',
        component: UserProfileComponent,
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
  