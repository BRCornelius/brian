import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AwsService } from '../site';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient, private aws: AwsService) { }

  sendEmail: Function = (): Observable<{}> => {
    const httpOptions = this.aws.httpOptions;
    return this.http.post('https://services.corneliuses.com/sendEmail', {httpOptions});
  }
}
