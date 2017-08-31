import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MdSnackBar } from '@angular/material';
import { unique, UniqueValidatorDirective } from './../../directives/unique-validator.directive'
import { User } from './../../models/user';
import { UserService } from './../../services/user.service';
import { Observable } from "rxjs";

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  @Output() success: EventEmitter<User> = new EventEmitter();
  @Output() error: EventEmitter <Error>= new EventEmitter();
  private formGroup: FormGroup;

  constructor(private userService: UserService,
              private formBuilder: FormBuilder,
              private snackBar: MdSnackBar) { }

  ngOnInit() {
    this.formGroup = this.createForm();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(6)]), this.uniqueName.bind(this)],
      email: ['', Validators.compose([Validators.required, Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]), this.uniqueEmail.bind(this)],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      password_confirmation: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
      phone: ['', Validators.compose([Validators.minLength(10), Validators.pattern(/^[\+\d]+$/)])]
    }, {validator: this.matchingPassword('password', 'password_confirmation')});
  }

  uniqueName(c: AbstractControl): Observable<any> {
    return this.userService.checkName(c.value);
  }

  uniqueEmail(c: AbstractControl): Observable<any> {
    return this.userService.checkEmail(c.value);
  }

  matchingPassword(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup): {[key: string]: any} => {
      let password = group.controls[passwordKey];
      let confirm_password = group.controls[confirmPasswordKey];

      if (password.value !== confirm_password.value) {
        return {
          mismatchedPasswords: true
        };
      }
    }
  }

  onSubmit(event){
    event.preventDefault();
    this.userService.register('email', {
      name: this.formGroup.value.name,
      email: this.formGroup.value.email,
      password: this.formGroup.value.password,
      phone: this.formGroup.value.phone
    })
    .subscribe((user: User) => {
      this.success.emit(user);
      this.userService.closeForm();
    },
    (err: Error) => {
      this.error.emit(err);
      this.snackBar.open('Error: Please fill out the required fields', '', {
        duration: 3000
      });
    });
  }
}
