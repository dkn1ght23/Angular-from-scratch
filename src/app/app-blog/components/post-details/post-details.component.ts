import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BlogService} from "../../../root-browser/services/blog.service";
import {BlogPost} from "../../modles/blog-post.modle";
import {User} from "../../modles/user.model";

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  blogPost: BlogPost;
  user: User;

  constructor(private route: ActivatedRoute,
              private blogService: BlogService) {

  }

  //Extracting POST ID of the post

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      if(params && params.id){
        this.loadSinglePostById(params.id)
      }
    })
  }

  //Passed the data from the POST ID to get single post details

  loadSinglePostById(postID: string){
    this.blogService.getPostById(postID).subscribe((response: any) => {
      this.blogPost=response;
      //getting the user id from the saved post details in blogPost
      this.loadPostUserData(this.blogPost.userId);
    })
  }

  loadPostUserData(userID: number){
    this.blogService.getUserById(userID).subscribe((response: any) => {
      //console.log(response);
      this.user = response;
    })
  }


}
