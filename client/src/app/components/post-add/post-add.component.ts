import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Post } from './../../models/post';
import { technologyOptions, exteriorOptions, interiorOptions, saftyOptions } from './../../data/cars';
import _ from 'lodash';

@Component({
  selector: 'post-add',
  templateUrl: './post-add.component.html',
  styleUrls: ['./post-add.component.scss']
})
export class PostAddComponent implements OnInit {
  @ViewChild('nav') navRef;
  @Input() step: number = 0;
  private post: Post= new Post();
  private steps: string[] = [
    'Make',
    'Model',
    'Year',
    'Color',
    'Main Information',
    'Engine & Transmission',
    'Techology',
    'Exterior Options',
    'Interior Options',
    'Safty Options',
    'Body Condition',
    'Post Information',
    'Pictures',
    'Publish Your Car'
  ];
  private navAnimation = null;
  private navItemWidth: number;
  private technologyOptions = _.cloneDeep(technologyOptions);
  private exteriorOptions = _.cloneDeep(exteriorOptions);
  private interiorOptions = _.cloneDeep(interiorOptions);
  private saftyOptions = _.cloneDeep(saftyOptions);

  constructor() { }

  ngOnInit() {
    this.navItemWidth = window.outerWidth / 3;
  }

  next(){
    this.goto(this.step + 1);
  }

  previous(){
    this.goto(this.step - 1);
  }

  goto(step){
    if(step < 0 || step > this.steps.length - 1) return;
    this.step = step;
    window.scrollTo(0, 0);

    let start = this.navRef.nativeElement.scrollLeft;
    let end = (this.step - 1) * this.navItemWidth;

    if(this.navAnimation) window.clearInterval(this.navAnimation);
    this.navAnimation = window.setInterval(() => {
      if(end > start){
        if(this.navRef.nativeElement.scrollLeft >= end) window.clearInterval(this.navAnimation);
        else this.navRef.nativeElement.scrollLeft+=10;
      }else{
        if(this.navRef.nativeElement.scrollLeft <= end) window.clearInterval(this.navAnimation);
        else this.navRef.nativeElement.scrollLeft-=10;
      }
    }, 10);

  }

  makeSelected(make){
    if(this.post.make !== make){
      this.post.make = make;
      this.post.model = null;
    }

    if(this.post.make === 'others'){
      this.post.model = 'others';
      this.next();
    }
    this.next();
  }

  modelSelected(model){
    this.post.model = model;
    this.next();
  }

  yearSelected(years){
    this.post.year = years.min;
    this.next();
  }

  colorSelected(color){
    this.post.color = color;
    this.next();
  }

  infoFormSubmited(data){
    this.post.mainInfo = data;
    this.next();
  }

  engineFormSubmited(data){
    this.post.engineInfo = data;
    this.next();
  }

  optionsCahnged(key, options){
    this.post[key] = options;
  }

  postFormSubmited(data){
    this.post.postInfo = data;
    this.next();
  }
}
