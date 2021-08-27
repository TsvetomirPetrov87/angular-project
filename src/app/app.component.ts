import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  authenticated(): boolean {
    return this.authService.user !== undefined;
  }

  constructor(
    private authService: AuthService,
  ) {}
}
