import { Injectable } from '@angular/core';

import { secretsConnection } from '../../utilities';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AwsService {

  constructor() { }

  getSecret: Function = (): Promise<{}> => {
    return new Promise((resolve, reject) => {
      secretsConnection.getSecretValue({SecretId: "corneliuses-api-key"}, (err, data) => {
        if(err){
          reject(err)
        } else {
          resolve(data)
        }
      });
    })
  }

  secret$ = from(this.getSecret())
}
