import {Component, OnDestroy, OnInit} from '@angular/core';
import {BlogService} from "../../../root-browser/services/blog.service";


@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit, OnDestroy{

  constructor(private blogService: BlogService) {

  }

  ngOnInit(): void {

    this.blogService.getAllPost().subscribe( (response: any) => {
      console.log(response);
    })

  }

  ngOnDestroy() {

  }

}
