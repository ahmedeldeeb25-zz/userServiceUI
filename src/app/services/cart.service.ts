import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions} from '@angular/http';
import {BASE_URL} from './urlConst';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


import {Cart} from '../models/Cart';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Injectable()
export class CartService {

  private baseUrl: String = BASE_URL+'/customers';

  constructor(private _http:Http,private userService:UserService,private _router:Router) { }

  getUserCart(userId:Number):Observable<Cart[]>{

    return this._http.get(this.baseUrl+"/"+userId+"/carts")
    .map(data => {
      return data.json();
    }).catch((response:Response) => response.json());
  }

  editCartProduct(userId:Number,cart:Cart):Observable<number>{
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: cpHeaders });
      return this._http.put(this.baseUrl+"/"+userId+"/carts",cart,options)
       .map(success => success.status)
       .catch(this.handleError);

       
  }

  addCart(cart:Cart){
    let userToken=this.userService.getCurrentUser().access_token;
    
    var headers = new Headers({'Content-type': 'application/json; charset=utf-8', 'Authorization': 'Bearer '+userToken});
    var options = new RequestOptions({ headers: headers });
    
     console.log(JSON.stringify(cart));
    return this._http.post(this.baseUrl+'/carts',cart,options)
    .map(success => success.status)
    .catch(this.handleError);
    
  }


  private handleError (error: Response | any) {
    
    console.log(error);
    //if(error.status == 401)
   // this._router.navigate(['/login']);
   return Observable.throw(new Error(error.status));
      }

}
