import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { UserService } from './services/user.service';
import { MenuService } from './services/menu.service';
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

  constructor(private userService: UserService, private menuService: MenuService, private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if(!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

    this.userService.userStatus.subscribe((status) => {
      this.menuService.closeMenu();
    });
  }

  openMenu(){
    this.menuService.openMenu();
  }

  closeMenu(){
    this.menuService.closeMenu();
  }

  closeLoginForm() {
    this.userService.closeForm();
  }

  addPost(){
    if(this.userService.user){
      this.router.navigateByUrl('/new');
    }else{
      this.userService.openLoginForm('/new');
    }
  }
}
