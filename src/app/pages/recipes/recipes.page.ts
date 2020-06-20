import { Component, OnInit } from '@angular/core';
import { RecipeService } from 'src/app/services';
import { IRecipe, IRecipeToTry } from 'src/app/interfaces';

@Component({
  selector: 'recipe-page',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.css']
})
export class RecipesPage implements OnInit {

  constructor(private recipe: RecipeService) {}

  ngOnInit() {
    this.recipe.getRecipes.subscribe(res => this.recipes = res.data.Items);
    this.recipe.getToTry.subscribe(res => this.toTry = res.data.Items);
  }

  interstitial = 'https://assets.corneliuses.com/photos/common/interstitial-duncan.gif';
  recipes: IRecipe[];
  toTry: IRecipeToTry[];
}
