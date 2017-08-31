import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from './../../services/user.service';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  @Input() selectedIndex = 0;
  @Output() close: EventEmitter<any> = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
}
