import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { PostService } from '../post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {

createForm: FormGroup;

  constructor(
    private authService: AuthService,
    private postService: PostService,
    private router: Router
  ) { }

  createPost(createForm: NgForm): void {
    if(createForm.invalid) {
      return;
    }
    // this.postService.savePost(createForm.value).subscribe({
    //   next: () => {
    //     this.router.navigate(['/posts'])
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   }
    // })
  }
}
