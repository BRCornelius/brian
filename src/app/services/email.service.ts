import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import * as AWS from 'aws-sdk';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  options: {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  }

  sendEmail: Function = () => {

    var region = "us-east-1",
    secretName = "corneliuses-api-key",
    secret,
    decodedBinarySecret;

    const client = new AWS.SecretsManager();
    client.getSecretValue({SecretId: secretName}, (err, data) => {
      console.log(err, data)
      if (err) {
          if (err.code === 'DecryptionFailureException')
              throw err;
          else if (err.code === 'InternalServiceErrorException')
              throw err;
          else if (err.code === 'InvalidParameterException')
              throw err;
          else if (err.code === 'InvalidRequestException')
              throw err;
          else if (err.code === 'ResourceNotFoundException')
              throw err;
      }
      else {
          if ('SecretString' in data) {
              secret = data.SecretString;
          } else {
              let buff = new Buffer(data.SecretString, 'base64');
              decodedBinarySecret = buff.toString('ascii');
          }
      }
      const accessSecret = JSON.parse(secret)['x-api-key'];
    // Your code goes here.
    const httpOptions = {
      headers: new HttpHeaders({'X-Api-Key': accessSecret})
    };
    this.http.post('https://services.corneliuses.com/sendEmail', {httpOptions}).subscribe(value => null);
  })
}
}
