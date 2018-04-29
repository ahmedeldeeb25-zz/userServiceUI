import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import { User } from '../models/User';
import { AUTH_URL, BASE_URL } from '../services/urlConst';
import { UserToken } from '../models/UserToken';
import { Router } from '@angular/router'


@Injectable()
export class UserService {
  public redirectUrl: string;
  private authUrl = AUTH_URL + '/oauth/token';
  private baseUrl = BASE_URL + "/customers"; 
  private static STORAGE_TOKEN_KEY = 'USER_TOKEN';
  private currentUserToken: UserToken;

  constructor(private _http: Http, private _router: Router) { }

  register(user: User): Observable<Response> {
    return this._http.post(this.baseUrl + '/registration', user);
  }


  login(email: string, password: string): Observable<UserToken> {

    let params = new URLSearchParams();
    params.append('grant_type', 'password');
    params.append('username', email);
    params.append('password', password);
    params.append('client_id', 'fooClientIdPassword');

    console.log(password);

    let headers = new Headers({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Basic ' + btoa("fooClientIdPassword:secret") });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.authUrl, params.toString(), options)
      .map((res: Response) => {
        let token = res.json();
        token.login = email;
        console.log("Access_token " + token.access_token);
        console.log(this.redirectUrl);
        this.saveUserToken(token);
        return token;
      }).catch((res:Response) =>{
        return res.json();
      });
  }

  saveUserToken(token) {
    localStorage.setItem(UserService.STORAGE_TOKEN_KEY, JSON.stringify(token));
  }

  logout() {
    localStorage.removeItem(UserService.STORAGE_TOKEN_KEY);
    this.currentUserToken = null;
  }

  getCurrentUser(): UserToken {
    if (!this.currentUserToken) {
      this.currentUserToken = this.getUserFromStorage();
    }
    return this.currentUserToken;
  }

  getUserFromStorage(): UserToken {
    let token = localStorage.getItem(UserService.STORAGE_TOKEN_KEY);
    return JSON.parse(token);
  }

  checkCredential() {
    if (localStorage.getItem(UserService.STORAGE_TOKEN_KEY) == null)
      return false;
    return true;
  }



}
