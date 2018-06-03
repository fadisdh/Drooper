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

  private data: {[key: string]: string};
  constructor() {
    this.data = {
      bodyStyle: defaultBodyStyle,
      kilometers: defaultKilometers,
      origin: defaultOrigin,
      condition: defaultCondition
    };
  }

  ngOnInit() {
    if(this.value.bodyStyle) this.data.bodyStyle = this.value.bodyStyle;
    if(this.value.kilometers) this.data.kilometers = this.value.kilometers;
    if(this.value.origin) this.data.origin = this.value.origin;
    if(this.value.condition) this.data.condition = this.value.condition;
  }

  onSubmit() {
    this.submit.emit(this.data);
  }
}
