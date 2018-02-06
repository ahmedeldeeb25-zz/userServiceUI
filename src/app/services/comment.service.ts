import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Comment } from '../models/Comment';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CommentService {

  private baseUrl: String = 'http://localhost:8090/rest/api/comments';

  constructor(private _http:Http) { }

  getComments():Observable<Comment[]>{
    return this._http.get(this.baseUrl+'/').
    map(data =>{
      return data.json();
    }).catch((x:Response) => x.json());
  }

  createComments(comment:Comment):Observable<number>{
    return this._http.post(this.baseUrl+'/',comment).
    map(success => success.status);
      
  }

}
