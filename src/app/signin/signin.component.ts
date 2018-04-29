import { any } from 'codelyzer/util/function';
import { Component, OnInit } from '@angular/core';


import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
  providers:[UserService]
})
export class SigninComponent implements OnInit {

  user =new User();

  constructor(private userService: UserService) {


  }


  ngOnInit() {
  }


  registerUser(valid: boolean) {

    if (!valid) {
      return;
    }

    this.userService.register(this.user).subscribe(() => {
      console.log("added successfully");
    }, (response: Response) => {
      console.log(response.json());
    }); 

    console.log(this.user);

  }


}
