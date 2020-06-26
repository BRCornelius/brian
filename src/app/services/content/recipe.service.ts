import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AwsService } from '../site';
import { IRecipeToTry } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
    private aws: AwsService,
    private http: HttpClient) { }

  headers = this.aws.httpOptions;

  getRecipes: Observable<any> = this.http.get(
    'https://services.corneliuses.com/getrecipes-brian',
    {...this.headers}
  );
  getToTry: Observable<any> = this.http.get(
    'https://services.corneliuses.com/get-recipe-to-ry-brian',
    {...this.headers}
  );

  addToTry: Function = (values: IRecipeToTry) => {
    this.http.put(
      'https://services.corneliuses.com/add-recipe-to-try-brian',
      values,
      {...this.headers}
    ).subscribe();
  }
}
