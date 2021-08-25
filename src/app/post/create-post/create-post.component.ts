import { Component } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { PostService } from '../post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
  exportAs: 'ngForm'
})
export class CreatePostComponent {

  createForm: FormGroup;

  constructor(
    private authService: AuthService,
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  createPost(postForm: NgForm): void{
    if (postForm.invalid) {
      return;
    }

    this.postService.savePost(postForm.value).then(() => {
      this.router.navigate(['/posts'])
      })
      .catch(err => {
        console.log(err);
      })
  }

}
