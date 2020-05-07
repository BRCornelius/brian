import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AwsService } from './aws.service';
import { ISecretResponse } from '../utilities'

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient, private aws: AwsService) { }

  sendEmail: Function = () => {
    let secret;
    this.aws.secret$.subscribe((res: ISecretResponse) => secret = JSON.parse(res.SecretString)['x-api-key']);
    const httpOptions = {
      headers: new HttpHeaders({'X-Api-Key': secret})
    };
    this.http.post('https://services.corneliuses.com/sendEmail', {httpOptions}).subscribe(value => null);
  };
};
