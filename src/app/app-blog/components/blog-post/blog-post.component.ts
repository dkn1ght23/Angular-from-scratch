import {Component, OnDestroy, OnInit} from '@angular/core';
import {BlogService} from "../../../root-browser/services/blog.service";
import {BlogPost} from "../../modles/blog-post.modle";


@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit, OnDestroy{


  blogPost: BlogPost[] = [];

  constructor(private blogService: BlogService) {

  }

  ngOnInit(): void {

    this.blogService.getAllPost().subscribe( (response: any) => {
      this.blogPost=response;
      //console.log(response);
    })

  }

  ngOnDestroy() {

  }

}
