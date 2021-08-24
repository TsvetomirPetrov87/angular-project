import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { AuthRoutingModule } from './auth-routing.module';
import { MyPostsComponent } from './my-posts/my-posts.component';



@NgModule({
  declarations: [
    LoginComponent, 
    RegisterComponent, 
    MyPostsComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    MyPostsComponent
  ],
  providers: [
    AuthService
  ],
})
export class AuthModule { }
