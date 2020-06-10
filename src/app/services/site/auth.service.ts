import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ICredential } from '../../utilities/types';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  authorized: boolean = false;
  credentials: ICredential;

  authenticate: Function = (): Observable<{}> => {
    return this.http.post('https://services.corneliuses.com/authenticate', this.credentials)
  }
  isAuthorized: Function = (): Observable<{}> => {
    if(document.cookie){
      const params = { token: document.cookie };
      return this.http.post('https://services.corneliuses.com/authorize', params);
    } else {
      return this.http.post('https://services.corneliuses.com/authorize', {});
    }
  }
}
