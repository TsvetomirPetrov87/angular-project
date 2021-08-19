import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(
    private authService: AuthService,
    private router: Router) { }

    get checkIfLogged(): boolean {
      return this.authService.checkIfLogged;
    }

    // get email(): string {
    //   return this.authService.user?.email;
    // }

}
