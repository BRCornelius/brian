import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LegoService {

  constructor(private http: HttpClient) { }

  getSets: Function = (): Observable<{}> => this.http.get('https://services.corneliuses.com/get-lego-sets')
}
