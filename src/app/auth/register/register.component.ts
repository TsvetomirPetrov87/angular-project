import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormBuilder, Validators} from '@angular/forms';
import { checkForTheSameValue, emailValidator } from 'src/app/shared/validators';
import * as firebase from 'firebase';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {

  email: string;
  password: string;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  formRegister = this.formBuilder.group({
     username: ['', [Validators.required, Validators.minLength(5)]],
     email: ['', [Validators.required, emailValidator]],
     password: ['', [Validators.required, Validators.minLength(6)]],
     //repeatPass: ['', [Validators.required, checkForTheSameValue()]]
  })

  register(): void {
    if (this.formRegister.invalid) {
      return;
    }

    // this.authService.register(this.formRegister.value).subscribe({
    //   next: () => { this.router.navigate(['/'])},
    //   error: (err) => { console.log(err);
    //   }
    // })
  }
}
