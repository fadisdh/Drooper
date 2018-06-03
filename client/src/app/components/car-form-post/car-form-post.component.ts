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
      price: 'JOD 0',
      notes: '',
      city: defaultCity,
      country: defaultCountry,
      phone: '+962'
    };
  }

  ngOnInit() {
    if(this.value.title) this.data.title = this.value.title;
    if(this.value.price) this.data.price = this.value.price;
    if(this.value.notes) this.data.notes = this.value.notes;
    if(this.value.city) this.data.city = this.value.city;
    if(this.value.phone) this.data.phone = this.value.phone;
  }

  onSubmit() {
    this.submit.emit(this.data);
  }
}
