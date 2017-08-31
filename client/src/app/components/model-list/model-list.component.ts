import { Component, OnInit, OnChanges, Input, SimpleChange, Output, EventEmitter } from '@angular/core';
import { CarService } from './../../services/car.service'
import { Model } from './../../models/model'

@Component({
  selector: 'model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.scss']
})
export class ModelListComponent implements OnInit {
  @Input() value: string;
  @Input() showAll: boolean = true;
  @Input() showOthers: boolean = true;
  @Input() make: string;
  @Output() select = new EventEmitter<string>();
  private models: Model[] = [];

  constructor(private carService: CarService) {
    this.models = this.carService.models(this.make);
  }

  ngOnInit() {}

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    this.models = this.carService.models(this.make);
  }

  onSelect(modelId: string) {
    this.select.emit(modelId);
  }

}
