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
      engineType: defaultEngineType,
      cylender: defaultCylender,
      transmission: defaultTransmission,
      driveType: defaultDriveType
    };
  }

  ngOnInit() {
    if(this.value.engineType) this.data.engineType = this.value.engineType;
    if(this.value.cylender) this.data.cylender = this.value.cylender;
    if(this.value.transmission) this.data.transmission = this.value.transmission;
    if(this.value.driveType) this.data.driveType = this.value.driveType;
  }

  onSubmit() {
    this.submit.emit(this.data);
  }
}
