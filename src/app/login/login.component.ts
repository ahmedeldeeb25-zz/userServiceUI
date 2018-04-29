import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  /**
   *
   */
  user_Email;
  user_pass;
  constructor(private userService: UserService, private _router: Router) {
    this.user_Email = '';
    this.user_pass = '';


  }

  ngOnInit() {
  }

  login() {
    this.userService.login(this.user_Email, this.user_pass)
      .subscribe(data => {
        console.log("Login Response ========> " + data);
        console.log(this.userService.redirectUrl);
        if (this.userService.redirectUrl) {
          this._router.navigate([this.userService.redirectUrl]);
        } else {
          this._router.navigate(['/']);
        }

      }, error => alert('invalid credential ::' + error)
      );
    // console.log("Click "+this.user_Email+" "+this.user_pass);
  }

}
