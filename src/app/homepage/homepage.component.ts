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
  public userForm: any = [{
    name : ' ' ,
    mdp : ' ' ,
  }];

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

    const bool: any = this.UsersService.login(userForm.value);
    if (bool === true){
      localStorage.setItem('name', JSON.stringify(userForm.value.name));
      this.router.navigate(['/master/' + localStorage.getItem('name').split('\"').join('')]);
    }
  }


  // tslint:disable-next-line:typedef
  public SelectUser(names){
    this.userForm = [{
      name : document.getElementById('name' + names).innerHTML.split(': ')[1] ,
      mdp : document.getElementById('mdp' + names).innerHTML.split(': ')[1] ,
    }];
    const bool: any = this.UsersService.login(this.userForm[0]);
    if (bool === true){
      localStorage.setItem('name', JSON.stringify(this.userForm[0].name));
      this.router.navigate(['/master/' + localStorage.getItem('name').split('\"').join('')]);
    }
  }

}
