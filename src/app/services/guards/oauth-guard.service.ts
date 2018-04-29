import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { UserService } from '../user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private _router: Router, private userService: UserService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);

  }

  checkLogin(url: string): boolean {
    if (this.userService.checkCredential()) {
      return true;
    }
    // Store the attempted URL for redirecting
    this.userService.redirectUrl = url;
    // Navigate to the login page with extras
    this._router.navigate(['/login']);
    return false;

  }



}
