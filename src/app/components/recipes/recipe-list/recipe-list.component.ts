import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  constructor(private recipe: RecipeService) { }

  ngOnInit() {
    this.recipe.recipes.subscribe(res => this.recipes = res.response.data.Items);
  }

  recipes = [];
}
