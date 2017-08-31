import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'car-body',
  templateUrl: './car-body.component.html',
  styleUrls: ['./car-body.component.scss']
})
export class CarBodyComponent implements OnInit {
  private condition = {
    topLeft: true,
    topRight: true,
    bottomLeft: true,
    bottomRight: true
  };
  private goods = 4;
  private img;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  toggleGood(location) {
    this.condition[location] = !this.condition[location];
    this.goods = (this.condition[location]) ? this.goods + 1 : this.goods - 1;
  }

  fileUpload(event) {
    console.log(event);
    this.img = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(event.target.files[0]));
  }
}
