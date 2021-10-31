import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppBlogRoutingModule } from './app-blog-routing.module';
import { BlogDefaultComponent } from './components/blog-default/blog-default.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';


@NgModule({
  declarations: [
    BlogDefaultComponent,
    BlogPostComponent
  ],
  imports: [
    CommonModule,
    AppBlogRoutingModule
  ]
})
export class AppBlogModule { }
