import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { Post } from './../../models/post';
import { PostService } from './../../services/post.service';
import { technologyOptions, exteriorOptions, interiorOptions, saftyOptions } from './../../data/cars';
import * as _ from "lodash";

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
    'Pictures',
    'Make',
    'Model',
    'Year',
    'Color',
    'Main Information',
    'Engine',
    'Techology',
    'Exterior Options',
    'Interior Options',
    'Safty Options',
    'Body Condition',
    'Post Information',
    'Publish Your Car'
  ];
  private navAnimation = null;
  private navItemWidth: number;
  private technologyOptions = _.cloneDeep(technologyOptions);
  private exteriorOptions = _.cloneDeep(exteriorOptions);
  private interiorOptions = _.cloneDeep(interiorOptions);
  private saftyOptions = _.cloneDeep(saftyOptions);

  constructor(private http: Http, private postService: PostService) { }

  ngOnInit() {
    this.navItemWidth = this.navRef.nativeElement.offsetWidth / 3;
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

  imageUploaded(images){
    if(images.bubbles) return;
    this.post.images = images;
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
    this.post.title = `${this.post.year} ${this.post.make} ${this.post.model}`;
    this.next();
  }

  colorSelected(color){
    this.post.color = color;
    this.next();
  }

  infoFormSubmited(data){
    this.post.bodyStyle = data.bodyStyle;
    this.post.kilometers = data.kilometers;
    this.post.origin = data.origin;
    this.post.condition = data.condition;
    this.next();
  }

  engineFormSubmited(data){
    this.post.engineType = data.engineType;
    this.post.cylender = data.cylender;
    this.post.transmission = data.transmission;
    this.post.driveType = data.driveType;
    this.next();
  }

  optionsCahnged(key, options){
    if(options.bubbles) return;
    this.post[key] = options;
  }

  postFormSubmited(data){
    this.post.title = data.title;
    this.post.price = data.price;
    this.post.notes = data.notes;
    this.post.city = data.city;
    this.post.phone = data.phone;
    this.next();
  }

  carBodySubmit(data){
    this.post.bodyReport = data.report;
    this.post.bodyCondition = data.condition;
  }

  publish(){
    this.postService.savePost(this.post.formData()).subscribe(
      response => {
        console.log(response);
      },
      err => {
        console.log(err);
      }
    );
  }
}
