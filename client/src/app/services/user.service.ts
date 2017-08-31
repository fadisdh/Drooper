import { Injectable } from '@angular/core';
import { Http , RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { config } from './../config'
import { User } from './../models/user';

@Injectable()
export class UserService {
  private token: string = null;
  private user: User = null;
  public showForm: string = null;
  public userStatus: Subject<string>;

  constructor(private http: Http) {
    this.userStatus = new Subject();
  }

  openLoginForm() {
    this.showForm = 'login';
    this.userStatus.next(USER_STATUS.LOGIN_FORM_OPENED);
  }

  openRegisterForm() {
    this.showForm = 'register';
    this.userStatus.next(USER_STATUS.REGISTER_FORM_OPENED);
  }

  closeForm() {
    this.showForm = null;
    this.userStatus.next(USER_STATUS.FORM_CLOSED);
  }

  login(email: string, password: string): Observable<any>{
    let observable: Observable<any> = this.http.post(`${config.api}/login`, {
      email: email,
      password: password
    }).map((response) => response.json());

    observable.subscribe((data) => {
      this.token = data.token;
      this.user = data.user;
    });

    this.userStatus.next(USER_STATUS.LOGEDIN);
    return observable;
  }

  logout() {
    this.user =null;
    this.token = null;
    this.userStatus.next(USER_STATUS.LOGEDOUT);
  }

  register(provider: string, data: {}) {
    data['provider'] = provider;
    let observalbe: Observable<User> = this.http.post(`${config.api}/users`, data).map((response) => response.json() as User);

    observalbe.subscribe((user: User) => {
      this.user = user;
    });

    this.userStatus.next(USER_STATUS.REGISTERED);
    return observalbe;
  }

  checkName(name: string): Observable<any> {
    return this.http.get(`${config.api}/users/check/name?name=${name}`)
    .map((response) => {
      let res = response.json();
      return res.avaliable ? null : { avaliable: false };
    });
  }

  checkEmail(email: string): Observable<any> {
    return this.http.get(`${config.api}/users/check/email?email=${email}`)
    .map((response) => {
      let res = response.json();
      return res.avaliable ? null : { avaliable: false };
    });
  }
}

export const USER_STATUS = {
  LOGEDIN: 'logedin',
  REGISTERED: 'registered',
  LOGEDOUT: 'logedout',
  LOGIN_FORM_OPENED: 'loginFormOpened',
  REGISTER_FORM_OPENED: 'registerFormOpened',
  FORM_CLOSED: 'formClosed'
};
