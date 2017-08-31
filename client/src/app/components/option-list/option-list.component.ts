import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import _ from 'lodash';

@Component({
  selector: 'option-list',
  templateUrl: './option-list.component.html',
  styleUrls: ['./option-list.component.scss']
})
export class OptionListComponent implements OnInit {
  @Input() options: any[] = [];
  @Output() change: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addOption() {
    this.options.push({title: '', value: false, disabled: false, focus: true});
  }

  onTitleChanged(option) {
    if(option.title){
      option.value = true;
    }else{
      this.options.splice(this.options.indexOf(option), 1);
    }

    let options = this.options.filter((option) => option.value === true).map((option) => option.title);
    this.change.emit(options);
  }

}
