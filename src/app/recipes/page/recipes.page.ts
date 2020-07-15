import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core';
import { RecipeService } from '../services';

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

  // tslint:disable-next-line:max-line-length
  authInterstitial = 'https://assets.corneliuses.com/photos/common/interstitial-farouk.gif';
  interstitial = 'https://assets.corneliuses.com/photos/common/interstitial-duncan.gif';

  ngOnInit() {
    this.recipe.getRecipes();
    this.recipe.getToTry();
    if (!this.auth.authorized) {
      this.auth.isAuthorized();
    }
  }

}
