import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Category } from '../models/Category';


import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CategoryService {

  private baseUrl: String = 'http://localhost:8090/rest/api/products';

  constructor(private _http: Http) {

  }


  getMainCategories(): Observable<Category[]> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });

    return this._http.get(this.baseUrl + '/categories/')
      .map(data => {
        return data.json();
      }).catch((x: Response) => x.json());

  }

  
  // private getHeaders() {
  //   // I included these headers because otherwise FireFox
  //   // will request text/html instead of application/json
  //   let headers = new Headers();
  //   headers.append('Accept', 'application/json');
  //   return headers;
  // }
}
