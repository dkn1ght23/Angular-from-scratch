import { NgModule } from '@angular/core';

import { RootBrowserRoutingModule } from './root-browser-routing.module';
import { RootDefaultComponent } from './components/root-default/root-default.component';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import { FruitCircleComponent } from './components/fruit-circle/fruit-circle.component';
import { FruitNormalComponent } from './components/fruit-normal/fruit-normal.component';
import { DeshboardComponent } from './components/deshboard/deshboard.component';
import { Error404Component } from './components/error404/error404.component';
import {MatButtonModule} from "@angular/material/button";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import { CustomTestComponent } from './components/custom-test/custom-test.component';
import {AppGenericModule} from "../app-generic/app-generic.module";
import {BlogService} from "./services/blog.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {BackendService} from "./services/backend.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    RootDefaultComponent,
    FruitCircleComponent,
    FruitNormalComponent,
    DeshboardComponent,
    Error404Component,
    CustomTestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RootBrowserRoutingModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    AppGenericModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [
    BlogService,
    BackendService,
  ],
  bootstrap: [RootDefaultComponent]
})
export class RootBrowserModule { }
