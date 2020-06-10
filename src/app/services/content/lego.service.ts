import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LegoService {

  constructor(private http: HttpClient) { }

  getInstructions: Function = (setID): Observable<{}> => {
    const options = { setID: setID };
    return this.http.post('https://services.corneliuses.com/get-lego-instructions', options);
  };
  getSets: Function = (): Observable<{}> => this.http.get('https://services.corneliuses.com/get-lego-sets');
}
