import { any } from 'codelyzer/util/function';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
user_fname:string;
user_lname:string;
user_pass:any;
user_confirmpass:any ;
user_phone:number;
user_Email:string;

  constructor() {
    this.user_fname='';
    this.user_lname;
    this.user_pass = '';
    this.user_phone ;
    this.user_confirmpass=''
    this.user_Email = '';


  }


  ngOnInit() {
  }


}
