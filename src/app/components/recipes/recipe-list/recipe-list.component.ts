import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services';
import { IRecipe } from 'src/app/interfaces';
import { ListOrderPipe } from 'src/app/pipes';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [ListOrderPipe]
})
export class RecipeListComponent implements OnInit {

  constructor(private recipe: RecipeService) { }

  interstitial = 'https://assets.corneliuses.com/photos/common/interstitial-duncan.gif';
  recipes: IRecipe[];

  ngOnInit() {
    this.recipe.recipes.subscribe(res => this.recipes = res.data.Items);
  }
}
