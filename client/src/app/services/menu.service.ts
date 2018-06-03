import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
  public showMenu: boolean = false;

  constructor() { }

  openMenu() {
    this.showMenu = true;
  }

  closeMenu() {
    this.showMenu = false;
  }
}
