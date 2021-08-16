import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.sass']
})
export class HomepageComponent implements OnInit {

  public users: UsersService;

  // tslint:disable-next-line:no-shadowed-variable
  constructor( public UsersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('name')) {
      this.router.navigate(['/master/' + localStorage.getItem('name').split('\"').join('')]);
    }
    this.users = this.UsersService.users;
  }

  // tslint:disable-next-line:typedef
  public onSubmit(userForm: any) {
    console.log(userForm.value);
    const bool: any = this.UsersService.login(userForm.value);
    console.log(bool);
    if (bool === true){
      localStorage.setItem('name', JSON.stringify(userForm.value.name));
      this.router.navigate(['/master/' + localStorage.getItem('name').split('\"').join('')]);
    }
  }

  // tslint:disable-next-line:typedef
  public SelectUser(){
    console.log('oui');
  }

}
