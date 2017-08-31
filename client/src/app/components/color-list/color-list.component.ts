import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { colors } from './../../data/cars'

@Component({
  selector: 'color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.scss']
})
export class ColorListComponent implements OnInit {
  @Input() value: string;
  @Output() select: EventEmitter<string> = new EventEmitter();
  private colors = colors;

  constructor() { }

  ngOnInit() {
  }

  onSelect(color) {
    this.select.emit(color.name);
  }

}
