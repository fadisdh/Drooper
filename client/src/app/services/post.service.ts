import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http , Headers } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { config } from './../config'
import { UserService } from './user.service';
import { Post } from './../models/post'
import * as _ from "lodash";

@Injectable()
export class PostService {
  constructor(private router: Router, private http: Http, private userService: UserService) {

  }

  private getHeaders(): Headers {
    let headers = new Headers();
    headers.append('x-access-token', this.userService.token);
    return headers;
  }

  getPosts(filters): Observable<Post[]> {
    let query = _.map(filters, (val, key) => {
      if(val) query += `${key}=${val}`;
    }).join('&');

    return this.http
      .get(`${config.api}/posts?${query}`, { headers: this.getHeaders() })
      .map(response => response.json() as Post[]);
  }

  getMyPosts(): Observable<Post[]> {
    return this.http
      .get(`${config.api}/posts/me`, { headers: this.getHeaders() })
      .map(response => response.json() as Post[]);
  }

  getPost(id): Observable<Post> {
    return this.http
      .get(`${config.api}/posts/${id}`, { headers: this.getHeaders() })
      .map(response => response.json() as Post);
  }

  savePost(data): Observable<Post>{
    return this.http.post(config.api + "/posts", data, { headers: this.getHeaders() }).map(response => response.json());
  }

  navigateToPosts(filters){
    let query = _.map(filters, (val, key) => {
      if(val) return `${key}=${val}`;
    }).join('&');
    this.router.navigateByUrl(`/posts?${query}`);
  }
}
