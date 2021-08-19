import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(
    private authService: AuthService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

    catchLogin(formLogin: NgForm): void {
      const {username, password} = formLogin.value;
      
      
    }
  
}

