import { Component, OnInit } from '@angular/core';
import { RecipeService, AuthService } from 'src/app/services';
import { IRecipe, IRecipeToTry } from 'src/app/interfaces';

@Component({
  selector: 'recipe-page',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.css']
})
export class RecipesPage implements OnInit {

  constructor(
    public auth: AuthService,
    public recipe: RecipeService
  ) {}

  interstitial = 'https://assets.corneliuses.com/photos/common/interstitial-duncan.gif';

  ngOnInit() {
    this.recipe.getRecipes();
    this.recipe.getToTry();
  }

}
