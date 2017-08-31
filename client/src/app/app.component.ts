import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './services/user.service';
import * as firebase from 'firebase/app';
import 'rxjs/add/operator/map';

import { Post } from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
export class AppComponent {
  private postsObservable: FirebaseListObservable<any>;
  private cars: FirebaseObjectObservable<any>;
  private years: string[] = [];
  private newPost: Post;

  private make: string;
  private model: string;
  private year: string;

  private showMenu: boolean = false;

  constructor(private db: AngularFireDatabase, private userService: UserService, private router: Router) {
    this.newPost = new Post();
    db.object('/cars').subscribe(snapshot => this.cars = snapshot);

    for(let i = 2018; i >= 1970; i--){
      this.years.push(i.toString());
    }
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if(!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
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

  closeMenu() {
    this.showMenu = false;
  }

  openMenu(){
    this.showMenu = true;
  }

  openLoginForm(): number {
    if(this.userService.showForm == 'login') return 0;
    if(this.userService.showForm == 'register') return 1;
    return null;
  }

  closeLoginForm() {
    this.userService.closeForm();
  }
}
