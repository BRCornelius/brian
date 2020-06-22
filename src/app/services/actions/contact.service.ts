import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AwsService } from '../site';
import { Subscription } from 'rxjs';
import { IDropdownOption } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient, private aws: AwsService) { }

  contactOptions: IDropdownOption[] = [
    { title: 'email', value: 'email' },
    { title: 'text', value: 'text' }
  ];

  sendEmail: Function = (): Subscription => {
    const httpOptions = this.aws.httpOptions;
    return this.http.post('https://services.corneliuses.com/sendEmail', {httpOptions})
      .subscribe();
  }
}
