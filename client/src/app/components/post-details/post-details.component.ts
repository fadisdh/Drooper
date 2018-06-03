import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgxCarousel } from 'ngx-carousel';
import { PostService } from './../../services/post.service';
import { Post } from './../../models/post';
import { config } from './../../config';
import { colors } from './../../data/cars';
import * as _ from "lodash";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {
  private post: Post;
  private colorCode: string;
  private config = config;
  private carousel;
  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.route.params
    .subscribe((params: ParamMap) => {
      this.postService.getPost(params['id']).subscribe(post => {
        this.post = post;
        this.colorCode = _.find(colors, { name: post.color }).code;
      });
    });

    this.carousel = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 8000,
      point: {
        visible: true,
        pointStyles: `
          .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            bottom: 0;
            left: 0;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.55);
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
          }
          .ngxcarouselPoint li.active {
              background: white;
              width: 10px;
          }
        `
      },
      load: 2,
      touch: true,
      loop: false
    }
  }

  call(){
    window.location.href = 'tel:' + this.post.phone;
  }
}
