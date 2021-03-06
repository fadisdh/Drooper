import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Post } from './../../models/post';
import { PostService } from './../../services/post.service'
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss'],
  animations: [
    trigger('slide', [
      transition(':enter', [
        style({transform: 'translateY(100%)'}),
        animate('300ms ease-in-out', style({transform: 'translateY(0)'}))
      ]),
      transition(':leave', [
        style({transform: 'translateY(0)'}),
        animate('300ms ease-in-out', style({transform: 'translateY(100%)'}))
      ])
    ])
  ]
})
export class PostListComponent implements OnInit {
  @Input() showFilters: boolean = true;
  private posts: Post[] = [];
  private filters: {[key: string]: any};
  private filter = null;

  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService) { }

  ngOnInit() {
    this.route.queryParams
    .subscribe((params: ParamMap) => {
      this.filters = {
        make: params['make'],
        model: params['model'],
        minYear: params['minYear'],
        maxYear: params['maxYear'],
        minPrice: params['minPrice'],
        maxPrice: params['maxPrice']
      }
      this.postService.getPosts(this.filters).subscribe((posts: Post[]) => {
        this.posts = posts;
      });
    });
  }

  openFilter(filter) {
    this.filter = filter;
  }

  filterChanged(data) {
    this.filter = null;
    if(data){
      if(data.make){
        this.filters.make = data.make;
        this.filters.model = '';
      }
      if(data.model) this.filters.model = data.model;
      if(data.minYear >= 0) this.filters.minYear = data.minYear;
      if(data.maxYear >= 0) this.filters.maxYear = data.maxYear;
      if(data.minPrice >= 0) this.filters.minPrice = data.minPrice;
      if(data.maxPrice >= 0) this.filters.maxPrice = data.maxPrice;
      this.postService.navigateToPosts(this.filters);
    }
  }

  onClick(id: string) {
    this.router.navigate(['/post', id]);
  }
}
