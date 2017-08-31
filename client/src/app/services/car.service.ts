import { Injectable } from '@angular/core';
import { Make } from './../models/make';
import { Model } from './../models/model';
import { cars as carData } from './../data/cars';
import _  from 'lodash';

@Injectable()
export class CarService {
  private cars: Make[] = carData;

  constructor() { }

  makes(search: string = ''): Make[] {
    if(!search) return this.cars;
    return _.filter(this.cars, (car) => {
      return car.name.match(new RegExp(search, 'i')) != null;
    });
  }

  models(makeId: string): Model[] {
    if(makeId) return _.find(this.cars, { id: makeId }).models;
    return [];
  }

  years() {
    let years = [];
    let year = new Date().getFullYear()
    for(let i = year + 1; i > year - 53; i--){
      years.push(i);
    }

    return years;
  }
}
