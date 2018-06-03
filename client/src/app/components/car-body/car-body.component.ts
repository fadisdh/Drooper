import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';
import { config } from './../../config';
import { DomSanitizer } from '@angular/platform-browser';
import * as _ from "lodash";

@Component({
  selector: 'car-body',
  templateUrl: './car-body.component.html',
  styleUrls: ['./car-body.component.scss']
})
export class CarBodyComponent implements OnInit {
  @Input() value;
  @Input() disabled = false;
  @Output() submit = new EventEmitter<any>();

  private condition = {
    topLeft: true,
    topRight: true,
    bottomLeft: true,
    bottomRight: true
  };
  private goods = 4;
  private report = null;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if(this.value && this.value.condition) this.condition = this.value.condition;
    if(this.value && this.value.report) this.report = this.value.report;

    this.goods = _.filter(this.condition, (value) => value /*&& value !== 'false'*/).length;
  }

  toggleGood(location) {
    if(this.disabled) return;
    this.condition[location] = !this.condition[location];
    this.goods = (this.condition[location]) ? this.goods + 1 : this.goods - 1;
    this.onSubmit();
  }

  fileUpload(event) {
    if(this.disabled) return;
    this.report = event.target.files[0];
    this.onSubmit();
  }

  onSubmit() {
    this.submit.emit({
      condition: this.condition,
      report: this.report
    });
  }

  uploadedImage(){
    if(!this.report || this.report === 'undefined') return '';
    if(this.report.small) return config.host + this.report.small;
    return this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(this.report));
  }
}
