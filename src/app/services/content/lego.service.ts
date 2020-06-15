import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AwsService } from '../site';

@Injectable({
  providedIn: 'root'
})
export class LegoService {

  constructor(
    private aws: AwsService,
    private http: HttpClient) { }

  headers = this.aws.httpOptions;

  getInstructions: Function = (setID): Observable<{}> => {
    const options = { setID: setID };
    return this.http.post('https://services.corneliuses.com/get-lego-instructions', options, this.headers);
  };
  getSets: Function = (): Observable<{}> => this.http.get('https://services.corneliuses.com/get-lego-sets', this.headers);
}
