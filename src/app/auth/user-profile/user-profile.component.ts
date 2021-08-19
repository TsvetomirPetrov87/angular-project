import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IUser } from 'src/app/shared/models/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: IUser[] | undefined;

  constructor(
    private activatedRout: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit() {
    // this.activatedRout.params.subscribe((params: Params) => {
    //   const id = params['id']
    // })
  }

}
