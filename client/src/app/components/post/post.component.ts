import { Component, OnInit, Input } from '@angular/core';
import { Post } from './../../models/post';
import { config } from './../../config';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post: Post;
  private config = config;

  constructor() { }

  ngOnInit() {
  }

}
