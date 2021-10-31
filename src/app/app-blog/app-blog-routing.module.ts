import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogDefaultComponent} from "./components/blog-default/blog-default.component";
import {BlogPostComponent} from "./components/blog-post/blog-post.component";

const routes: Routes = [
  {
    path: '',
    component: BlogDefaultComponent,
    children: [
      {
        path: '',
        redirectTo: 'posts',
        pathMatch: 'full'
      },
      {
        path: 'posts',
        component: BlogPostComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppBlogRoutingModule { }
