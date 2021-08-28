import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
  exportAs: 'ngForm'
})
export class CreatePostComponent {


  constructor(
    private postService: PostService,
    private router: Router
  ) { }

  createPost(postForm: NgForm): void {
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

  onFileSelected(event): void {
    const file = event.target.files[0];
    if (file) {
      this.postService.fileToUpload = file;
    }
  }
}
