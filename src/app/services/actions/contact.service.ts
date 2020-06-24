import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AwsService } from '../site';
import { IDropdownOption, IContactValues } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient, private aws: AwsService) { }

  contactOptions: IDropdownOption[] = [
    { title: 'Email', value: 'email' },
    { title: 'Text', value: 'text' }
  ];

  sendEmail: Function = (values: IContactValues): void => {
    this.http.post('https://services.corneliuses.com/sendEmail', values, this.aws.httpOptions).subscribe();
  }

  sendText: Function = (values: IContactValues): void => {
    this.http.post('https://services.corneliuses.com/send-text-brian', values, this.aws.httpOptions).subscribe();
  }
}
