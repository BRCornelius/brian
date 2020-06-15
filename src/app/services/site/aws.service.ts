import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AwsService {

  constructor() { }

  httpOptions = {
    headers: new HttpHeaders({'X-Api-Key': environment.apiKey})
  };

}
