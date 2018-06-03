import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Input() filter: string = 'make';
  @Input() make: string;
  @Output() result: EventEmitter<any> = new EventEmitter();
  private filters;

  constructor() { }

  ngOnInit() {
  }

  makeSelected(make) {
    this.result.emit({ make: make });
  }

  modelSelected(model) {
    this.result.emit({ model: model });
  }

  yearsSelected(years) {
    this.result.emit({ minYear: years.min, maxYear: years.max });
  }

  priceSelected(price) {
    this.result.emit({ minPrice: price.min, maxPrice: price.max });
  }
}
