import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppBlogRoutingModule } from './app-blog-routing.module';
import { BlogDefaultComponent } from './components/blog-default/blog-default.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';


@NgModule({
  declarations: [
    BlogDefaultComponent,
    BlogPostComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    AppBlogRoutingModule
  ]
})
export class AppBlogModule { }
