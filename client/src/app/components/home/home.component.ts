import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
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

  private showSearch: boolean = false;

  constructor() {}

  openSearch() {
    this.showSearch = true;
  }

  closeSearch() {
    this.showSearch = false;
  }
}
