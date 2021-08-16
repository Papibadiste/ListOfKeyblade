import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {

  public users: UsersService;

  // tslint:disable-next-line:no-shadowed-variable
  constructor( public UsersService: UsersService) { }

  ngOnInit(): void {
    this.users = this.UsersService.users;
  }

  // tslint:disable-next-line:typedef
  public onSubmit(userForm: any) {
    console.log(userForm.value);
  }

}
