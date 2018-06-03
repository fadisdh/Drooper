import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'car-form-publish',
  templateUrl: './car-form-publish.component.html',
  styleUrls: ['./car-form-publish.component.scss']
})
export class CarFormPublishComponent implements OnInit {
  @Output() publish = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  click() {
    this.publish.emit(true);
  }
}
