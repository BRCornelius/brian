import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
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
  };
  isAuthorized: Function = (): Subscription => {
    if(!this.authorized){
      if(document.cookie){
        const params = { token: document.cookie };
        return this.http.post('https://services.corneliuses.com/authorize', params).subscribe((response: any) => this.authorized = response.body);
      } else {
        return this.http.post('https://services.corneliuses.com/authorize', {}).subscribe((response: any) => this.authorized = response.body);
      };
    };
  };
};
