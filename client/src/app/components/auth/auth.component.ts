import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @Input() tab = 0;

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
}
