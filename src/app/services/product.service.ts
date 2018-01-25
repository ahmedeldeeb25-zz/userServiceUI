import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ProductService {

  private baseUrl="http://localhost:8080/rest/api/product";
  constructor(private _http:Http) { }

}
