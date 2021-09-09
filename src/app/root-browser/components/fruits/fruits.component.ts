import { Component, OnInit } from '@angular/core';
import {Fruit} from "../../models/fruits.model";

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.scss']
})
export class FruitsComponent implements OnInit {


  fruits: Fruit[] = [
    new Fruit("Apple"),
    new Fruit("Banana"),
    new Fruit("Orange"),
    new Fruit("Mango"),
  ];

  onClick(){
    console.log('button clicked');
  }


  constructor() { }

  ngOnInit(): void {
  }

}
