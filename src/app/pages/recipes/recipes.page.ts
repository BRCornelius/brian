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
    private recipe: RecipeService
  ) {}

  interstitial = 'https://assets.corneliuses.com/photos/common/interstitial-duncan.gif';
  recipes: IRecipe[];
  toTry: any[];

  ngOnInit() {
    this.recipe.getRecipes.subscribe(res => this.recipes = res.data.Items);
    this.recipe.getToTry.subscribe(res => this.toTry = res.data.Items);
  }

  updateToTry: Function = (recipe: IRecipeToTry): void => {
    const newRecipe = {
      title: { S: recipe.title },
      url: { S: recipe.url }
    };
    this.toTry = [...this.toTry, newRecipe];
  }
}
