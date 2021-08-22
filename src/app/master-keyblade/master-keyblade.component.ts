import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {UsersService} from '../users.service';
import { ListKeybladeService } from '../list-keyblade.service' ;


@Component({
  selector: 'app-master-keyblade',
  templateUrl: './master-keyblade.component.html',
  styleUrls: ['./master-keyblade.component.sass']
})
export class MasterKeybladeComponent implements OnInit {

  public userInfo: any = [];
  public keyblades: any ;

  // tslint:disable-next-line:max-line-length
  constructor( public Users: UsersService, private router: Router, public ListKeyblade: ListKeybladeService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (!localStorage.getItem('name')) {
      this.router.navigate(['']);
    }

    this.Users.users.forEach(user => {
      if (user.name === this.route.snapshot.params.name ){
        this.userInfo.push(user);
      }
    });

    this.keyblades = this.ListKeyblade.Keyblades.filter(k => k.nameUser === this.route.snapshot.params.name);

    this.userInfo.push(this.keyblades);
  }

  // tslint:disable-next-line:typedef
  public Disconnect() {
    localStorage.removeItem('name');
    this.router.navigate(['']);
  }
}
