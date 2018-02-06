import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


import {Cart} from '../models/Cart';

@Injectable()
export class CartService {

  private baseUrl: String = 'http://localhost:8090/rest/api/customers';

  constructor(private _http:Http) { }

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


  private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
      }

}
