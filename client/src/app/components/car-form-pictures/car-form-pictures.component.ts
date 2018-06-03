import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'car-form-pictures',
  templateUrl: './car-form-pictures.component.html',
  styleUrls: ['./car-form-pictures.component.scss']
})
export class CarFormPicturesComponent implements OnInit {
  @Input() value = [];
  @Output() change: EventEmitter<any> = new EventEmitter<any>();
  private images: any[] = [];

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if(this.value) this.images = this.value;
  }

  fileUpload(i, event) {
    this.images[i] = event.target.files[0];
    this.change.emit(this.images);
  }

  getImage(i){
    if(!this.images[i]) return '';
    return this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(this.images[i]))
  }
}
