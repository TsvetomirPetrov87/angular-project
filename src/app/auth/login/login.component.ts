import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { emailValidator } from 'src/app/shared/validators';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email: string;
  password: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  formLogin = this.formBuilder.group({
    email: ['', [Validators.required, emailValidator]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  })

  login({ email, password }): void {
    this.authService.login(email, password);
  }
}
