import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ajax } from 'rxjs/ajax';

const params = {
  TableName: 'RECIPES_BRIAN',
};

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) { }

  recipes = ajax('https://services.corneliuses.com/getrecipes-brian');
}
