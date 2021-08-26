import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { checkForTheSameValue, emailValidator } from 'src/app/shared/validators';
import * as firebase from 'firebase';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  formRegister = this.formBuilder.group({
    displayName: ['', [Validators.required, Validators.minLength(5)]],
    email: ['', [Validators.required, emailValidator]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    repeatPass: ['', [Validators.required]]
  });

  createUser(data: { displayName, email, password, repeatPass }): void {
    this.authService.register(data).then(() => {
      this.router.navigate(['/posts'])
    })
      .catch(err => {
        console.log(err);
      })
  }
}
