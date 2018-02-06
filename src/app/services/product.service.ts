import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../models/product';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService {

  private baseUrl = "http://localhost:8090/rest/api/products";
  constructor(private _http: Http) { }

  getCategoryProducts(CategoryId: Number): Observable<Product[]> {
    return this._http.get(this.baseUrl + "/categories/" + CategoryId + '/products').
      map(data => {
        console.log(data.json());
        return data.json();
      }).catch((response: Response) => response.json())
  }


  

  getSingleProduct(productId: Number): Observable<Product>{
    return this._http.get(this.baseUrl+"/"+productId+"/details").
    map(data => {
      return data.json();
    }).catch((x:Response)=> x.json());
  }

}
