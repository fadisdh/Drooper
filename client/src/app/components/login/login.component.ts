import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { MatSnackBar } from '@angular/material';
import { UserService } from './../../services/user.service';
import { User } from './../../models/user';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @Output() success: EventEmitter<User> = new EventEmitter();
  @Output() error: EventEmitter<Error> = new EventEmitter();
  private formGroup: FormGroup;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private SnackBar: MatSnackBar) { }

  ngOnInit() {
    this.formGroup = this.createForm();
  }

  createForm() {
    return this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  login(event): void{
    event.preventDefault();
    this.userService.login(this.formGroup.value.email, this.formGroup.value.password).subscribe((data: {[key: string]: any}) => {
      this.success.emit(data.user);
      this.userService.closeForm();
    },
  (error: Error) => {
    this.error.emit(error);
    this.SnackBar.open('Wrong credintials, try again', '', {
      duration: 3000
    });
  });
  }

}
