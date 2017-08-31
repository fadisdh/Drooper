import { Injectable } from '@angular/core';
import { Http , RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { config } from './../config'
import { Post } from './../models/post'
import _ from 'lodash';

@Injectable()
export class PostService {
  constructor(private http: Http) { }

  getPosts(filters): Observable<Post[]> {
    let query = '';
    _.forEach(filters, (val, key) => {
      if(val) query += `${key}=${val}&`;
    });

    return this.http
      .get(`${config.api}/posts?${query}`)
      .map(response => response.json() as Post[]);
  }
}
