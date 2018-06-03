import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  search(filters){
    this.postService.navigateToPosts(filters);
  }
}
