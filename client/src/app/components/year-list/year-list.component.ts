import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarService } from './../../services/car.service';

@Component({
  selector: 'year-list',
  templateUrl: './year-list.component.html',
  styleUrls: ['./year-list.component.scss']
})
export class YearListComponent implements OnInit {
  @Input() value: number;
  @Input() showAll: boolean = true;
  @Input() range: boolean = true;
  @Output() select = new EventEmitter<{min: number, max: number}>();
  private years: number[] = [];
  private max: number;
  private min: number;

  constructor(private carService: CarService) {
    this.years = this.carService.years();
  }

  ngOnInit() {
    this.min = this.value;
    this.max = this.value;
  }

  onSelect(year: number) {
    if(!this.range){
      this.min = year;
      this.max =year;
      this.done();
    } else if(!this.max){
      this.max = year;
    }else if(!this.min){
      if(this.max < year){
        this.min = this.max;
        this.max = year;
      }else{
        this.min = year;
      }
    }else{
      this.max = year;
      this.min = null;
    }
  }

  selectAll() {
    this.min = null;
    this.max = null;
  }

  done() {
    if(!this.max){
      this.select.emit(null);
    }else{
      this.min = this.min || this.max;
      this.select.emit({min: this.min, max: this.max});
    }
  }
}
