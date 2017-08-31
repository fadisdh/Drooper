import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { cities, defaultCity, defaultCountry, masks } from './../../data/cars';

@Component({
  selector: 'car-form-post',
  templateUrl: './car-form-post.component.html',
  styleUrls: ['./car-form-post.component.scss']
})
export class CarFormPostComponent implements OnInit {
  @Input() value: {[key: string]: string};
  @Output() submit: EventEmitter<any> = new EventEmitter();
  private cities: string[] = cities;
  private masks = masks;

  private data: {[key: string]: string};
  constructor() {
    this.data = {
      title: '',
      price: '',
      notes: '',
      city: defaultCity,
      country: defaultCountry,
      phone: '+962'
    };
  }

  ngOnInit() {
    if(this.value) this.data = this.value;
  }

  onSubmit() {
    this.submit.emit(this.data);
  }
}
