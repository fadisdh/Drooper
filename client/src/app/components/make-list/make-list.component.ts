import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarService } from './../../services/car.service'

@Component({
  selector: 'make-list',
  templateUrl: './make-list.component.html',
  styleUrls: ['./make-list.component.scss']
})
export class MakeListComponent implements OnInit {
  @Input() value: string;
  @Output() select = new EventEmitter<string>();
  private makes: {};
  private search: string;

  constructor(private carsService: CarService) {
    this.makes = this.carsService.makes();
  }

  ngOnInit() { }

  onSelect(makeId: string) {
    this.select.emit(makeId);
  }

  searchChanged() {
    this.makes = this.carsService.makes(this.search);
  }
}
