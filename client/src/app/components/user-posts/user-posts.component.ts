import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from './../../models/post';
import { PostService } from './../../services/post.service';

@Component({
  selector: 'user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss']
})
export class UserPostsComponent implements OnInit {
  private posts: Post[];
  constructor(private postService: PostService, private router: Router) {
    this.postService.getMyPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

  ngOnInit() {
  }

  onClick(id: string) {
    this.router.navigate(['/post', id]);
  }

}
