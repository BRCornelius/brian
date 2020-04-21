import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  image: string = "https://material.angular.io/assets/img/examples/shiba2.jpg"
}
