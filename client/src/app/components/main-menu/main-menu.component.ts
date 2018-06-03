import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../../services/user.service'
import { MenuService } from './../../services/menu.service'

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private menuService: MenuService) { }

  ngOnInit() {
  }

  home(){
    this.menuService.closeMenu();
    this.router.navigateByUrl('/home');
  }

  profile(){
    this.menuService.closeMenu();
    this.router.navigateByUrl('/user/profile');
  }

  posts(){
    this.menuService.closeMenu();
    this.router.navigateByUrl('/user/posts');
  }

  logout(){
    this.menuService.closeMenu();
    this.userService.logout();
  }
}
