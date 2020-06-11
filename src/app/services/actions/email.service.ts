import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AwsService } from '../site/aws.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient, private aws: AwsService) { }

  sendEmail: Function = (): Observable<{}> => {
    const httpOptions = {
      headers: new HttpHeaders({'X-Api-Key': 'secret'})
    };
    return this.http.post('https://services.corneliuses.com/sendEmail', {httpOptions});
  };
};
