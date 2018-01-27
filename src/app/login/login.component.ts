import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 /**
  *
  */
user_Email;
user_pass ;
  constructor() {
    this.user_Email = '';
    this.user_pass = '';


   }

  ngOnInit() {
  }

}
