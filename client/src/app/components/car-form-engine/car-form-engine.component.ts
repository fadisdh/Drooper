import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { engineTypes, defaultEngineType, cylenders, defaultCylender, transmissions, defaultTransmission, driveTypes, defaultDriveType } from './../../data/cars';

@Component({
  selector: 'car-form-engine',
  templateUrl: './car-form-engine.component.html',
  styleUrls: ['./car-form-engine.component.scss']
})
export class CarFormEngineComponent implements OnInit {
  @Input() value: {[key: string]: string};
  @Output() submit: EventEmitter<any> = new EventEmitter();
  private engineTypes: string[] = engineTypes;
  private cylenders: string[] = cylenders;
  private transmissions: string[] = transmissions;
  private driveTypes: string[] = driveTypes;

  private data: {[key: string]: string};
  constructor() {
    this.data = {
      engineTypes: defaultEngineType,
      cylender: defaultCylender,
      transmission: defaultTransmission,
      driveType: defaultDriveType
    };
  }

  ngOnInit() {
    if(this.value) this.data = this.value;
  }

  onSubmit() {
    this.submit.emit(this.data);
  }
}
