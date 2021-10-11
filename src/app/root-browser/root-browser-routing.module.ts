import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DeshboardComponent} from "./components/deshboard/deshboard.component";
import {FruitNormalComponent} from "./components/fruit-normal/fruit-normal.component";
import {FruitCircleComponent} from "./components/fruit-circle/fruit-circle.component";
import {Error404Component} from "./components/error404/error404.component";

const routes: Routes = [
  {
    path: '',
    component: DeshboardComponent
  },
  {
    path: 'fruitNormal',
    component: FruitNormalComponent
  },
  {
    path: 'fruitCircle',
    component: FruitCircleComponent
  },
  {
    path: '**',
    component: Error404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RootBrowserRoutingModule { }
