import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

import { Post } from './../../models/post';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slide', [
      transition(':enter', [
        style({transform: 'translateY(100%)'}),
        animate('300ms ease-in-out', style({transform: 'translateY(0)'}))
      ]),
      transition(':leave', [
        style({transform: 'translateY(0)'}),
        animate('300ms ease-in-out', style({transform: 'translateY(100%)'}))
      ])
    ])
  ]
})
export class HomeComponent {
  private postsObservable: FirebaseListObservable<any>;
  private cars: FirebaseObjectObservable<any>;
  private years: string[] = [];
  private newPost: Post;

  private make: string;
  private model: string;
  private year: string;

  private showSearch: boolean = false;

  constructor(private db: AngularFireDatabase) {
    this.newPost = new Post();

    // this.postsObservable = db.list('/posts');
    // this.postsObservable.subscribe(snapshot => this.posts = snapshot);

    db.object('/cars').subscribe(snapshot => this.cars = snapshot);

    for(let i = 2018; i >= 1970; i--){
      this.years.push(i.toString());
    }
  }

  makeChanged() {
    this.model = null;
    this.year = null;
  }

  modelChanged() {
    this.year = null;
  }

  createPost(event){
    event.preventDefault();
    this.postsObservable.push(this.newPost);
    this.newPost = new Post();
  }

  openSearch() {
    this.showSearch = true;
  }

  closeSearch() {
    this.showSearch = false;
  }
}
