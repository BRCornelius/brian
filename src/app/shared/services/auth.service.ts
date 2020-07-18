import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ICredential } from 'src/app/core';
import { AwsService } from './aws.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private aws: AwsService,
    private http: HttpClient
  ) { }

  authorized = false;
  credentials: ICredential;
  hasAuthorizationRun = false;
  headers = this.aws.httpOptions;

  authenticate: Function = (): Observable<{}> => {
    return this.http.post(
      'https://services.corneliuses.com/authenticate',
      this.credentials,
      {...this.headers}
    );
  }
  isAuthorized: Function = (): Subscription => {
    if (!this.authorized) {
      const token = document.cookie ? document.cookie : '';
      const params = { token: token };
      return this.http.post(
        'https://services.corneliuses.com/authorize',
        params,
        {...this.headers}
      ).subscribe((response: any) => {
        this.authorized = response.body;
        this.hasAuthorizationRun = true;
      });
    }
  }
}
