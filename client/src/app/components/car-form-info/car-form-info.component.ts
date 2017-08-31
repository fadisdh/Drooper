import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { bodyStyles, defaultBodyStyle, conditions, defaultCondition, kilometers, defaultKilometers, origins, defaultOrigin } from './../../data/cars';

@Component({
  selector: 'car-form-info',
  templateUrl: './car-form-info.component.html',
  styleUrls: ['./car-form-info.component.scss']
})
export class CarFormInfoComponent implements OnInit {
  @Input() value: {[key: string]: string};
  @Output() submit: EventEmitter<any> = new EventEmitter();
  private bodyStyles: string[] = bodyStyles;
  private conditions: string[] = conditions;
  private origins: string[] = origins;
  private kilometers: string[] = kilometers;

  private info: {[key: string]: string};
  constructor() {
    this.info = {
      bodyStyle: defaultBodyStyle,
      kilometers: defaultKilometers,
      origin: defaultOrigin,
      condition: defaultCondition
    };
  }

  ngOnInit() {
    if(this.value) this.info = this.value;
  }

  onSubmit() {
    this.submit.emit(this.info);
  }
}
