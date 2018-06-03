import { Injectable } from '@angular/core';
import { Http , RequestOptions } from '@angular/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Observable }     from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { config } from './../config'
import { User } from './../models/user';
import { Cookie } from 'ng2-cookies/ng2-cookies';

@Injectable()
export class UserService {
  public token: string = null;
  public user: User = null;
  public showForm: string = null;
  public userStatus: Subject<string>;
  public redirectUrl: string;

  constructor(private http: Http, private router: Router, private SnackBar: MatSnackBar) {
    this.userStatus = new Subject();

    this.token = Cookie.get('token');
    this.user = JSON.parse(Cookie.get('user'));
  }

  openLoginForm(redirect = null) {
    this.showForm = 'login';
    this.redirectUrl = redirect;
    this.userStatus.next(USER_STATUS.LOGIN_FORM_OPENED);
  }

  openRegisterForm(redirect = null) {
    this.showForm = 'register';
    this.redirectUrl = redirect;
    this.userStatus.next(USER_STATUS.REGISTER_FORM_OPENED);
  }

  closeForm() {
    this.showForm = null;
    this.redirectUrl = null;
    this.userStatus.next(USER_STATUS.FORM_CLOSED);
  }

  login(email: string, password: string): Observable<any>{
    let observable: Observable<any> = this.http.post(`${config.api}/login`, {
      email: email,
      password: password
    }).map((response) => response.json());

    observable.subscribe((data) => {
      this.createSession(data);
      this.userStatus.next(USER_STATUS.LOGEDIN);
      this.SnackBar.open(`Welcome Back ${this.user.name}`, '', { duration: 3000 })
      if(this.redirectUrl) this.router.navigateByUrl(this.redirectUrl);
    });

    return observable;
  }

  logout() {
    this.SnackBar.open(`Good Bye ${this.user.name}`, '', { duration: 3000 })
    this.user =null;
    this.token = null;

    Cookie.deleteAll();
    this.userStatus.next(USER_STATUS.LOGEDOUT);
    this.router.navigateByUrl('/');
  }

  register(provider: string, data: {}) {
    data['provider'] = provider;
    let observalbe: Observable<any> = this.http.post(`${config.api}/users`, data).map((response) => response.json() as User);

    observalbe.subscribe((data) => {
      this.createSession(data);
      this.userStatus.next(USER_STATUS.REGISTERED);
      this.SnackBar.open(`Welcome ${this.user.name}`, '', { duration: 3000 })
      if(this.redirectUrl) this.router.navigateByUrl(this.redirectUrl);
    });

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

  createSession(data) {
    this.token = data.token;
    this.user = data.user;

    Cookie.set('token', this.token);
    Cookie.set('user', JSON.stringify(this.user));
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
