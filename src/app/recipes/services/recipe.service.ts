import { Injectable } from '@angular/core';

import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IRecipeToTry, IRecipe } from '../models';
import { AwsService } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
    private aws: AwsService,
    private http: HttpClient) { }

  headers = this.aws.httpOptions;
  recipesToTry: any[];
  recipesFavorites: IRecipe[];

  getRecipes: Function = (): Subscription => this.http.get(
    'https://services.corneliuses.com/getrecipes-brian',
    {...this.headers}
  ).subscribe((res: any) => {
    this.recipesFavorites = res.data;
  })
  getToTry: Function = (): Subscription => this.http.get(
    'https://services.corneliuses.com/get-recipe-to-ry-brian',
    {...this.headers}
  ).subscribe((res: any) => {
    this.recipesToTry = res.data;
  })

  addToTry: Function = (values: IRecipeToTry) => {
    this.http.put(
      'https://services.corneliuses.com/add-recipe-to-try-brian',
      values,
      {...this.headers}
    ).subscribe();
    const newRecipe = {
      title: values.title ,
      url: values.url
    };
    this.recipesToTry = [...this.recipesToTry, newRecipe];
  }
}
