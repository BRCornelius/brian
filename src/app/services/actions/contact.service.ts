import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AwsService } from '../site';
import { IDropdownOption } from 'src/app/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: HttpClient, private aws: AwsService) { }

  contactOptions: IDropdownOption[] = [
    { title: 'email', value: 'email' },
    { title: 'text', value: 'text' }
  ];

  sendEmail: Function = (values): void => {
    const httpOptions = this.aws.httpOptions;
    this.http.post('https://services.corneliuses.com/sendEmail', values, httpOptions).subscribe();
  }
}
