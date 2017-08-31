import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'car-selector',
  templateUrl: './car-selector.component.html',
  styleUrls: ['./car-selector.component.scss']
})
export class CarSelectorComponent implements OnInit {
  private step: number = 1;
  private make: string;
  private model: string;
  private years: { min: number, max: number};

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onMakeSelect(make) {
    this.make  = make;
    this.step = 2;
  }

  onModelSelect(model) {
    this.model = model;
    this.step = 3;
  }

  onYearSelect(years) {
    this.years = years;
    this.router.navigateByUrl(`/posts?make=${this.make}&model=${this.model}&minYear=${this.years.min}&maxYear=${this.years.max}`);
  }

  goto(step) {
    if(step < 1 && step > 3) return;
    this.step = step;

    switch(this.step){
      case 1:
        this.make = null;
        this.model = null;
        this.years = null;
        break;
      case 2:
        this.model = null;
        this.years = null
        break;
      case 3:
        this.years = null;
        break;
    }
  }

  next() {
    if(this.step < 3) this.step++;
  }

}
