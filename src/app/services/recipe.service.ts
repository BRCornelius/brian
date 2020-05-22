import { Injectable } from '@angular/core';

import { ajax } from 'rxjs/ajax';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  recipes: Observable<any> = ajax('https://services.corneliuses.com/getrecipes-brian');
}
