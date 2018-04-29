import { Component, OnInit } from '@angular/core';

import{SharedService} from '../services/shared.service';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})

export class HeaderComponent implements OnInit {
 
  currency = [];
  languages = [];
  links = [];
  value=1;
  constructor(private ss:SharedService,private userService:UserService,
  private _router:Router) {

    this.currency = ['USD', 'Egp'];
    this.languages = [
      'Arabic',
      'English'
    ];
    this.links = ['SignUp', 'Profile', 'Settings', 'SignIn',];

    this.value = 1;
    this.ss=ss;

  }

   checkLogin(){
     return this.userService.checkCredential();
   }

   logout(){
     this.userService.logout();
     this._router.navigate(['/']);

   }
  
  
  
  ngOnInit() {
   this.ss.getEmittedValue()
    .subscribe(item => this.value+=item);
}

}
