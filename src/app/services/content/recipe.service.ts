import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AwsService } from '../site';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
    private aws: AwsService,
    private http: HttpClient) { }

  headers = this.aws.httpOptions;

  recipes: Observable<any> = this.http.get('https://services.corneliuses.com/getrecipes-brian', {...this.headers});
  toTry: Observable<any> = this.http.get('https://services.corneliuses.com/get-recipe-to-ry-brian', {...this.headers});
}
