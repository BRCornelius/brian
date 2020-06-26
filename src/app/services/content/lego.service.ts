import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AwsService } from '../site';
import { ILegoSet, ILegoSetNumber } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LegoService {

  constructor(
    private aws: AwsService,
    private http: HttpClient
  ) { }

  headers: any = this.aws.httpOptions;
  mockData: ILegoSet[] = [
    { name: 'Poppy\'s Village', setID: 29367, image: { thumbnailURL: '' } }
  ];

  addSet: Function = (setNumber: ILegoSetNumber): Observable<{}> => this.http.post(
    'https://services.corneliuses.com/add-lego-set',
    setNumber,
    this.headers
  )
  getInstructions: Function = (setID): Observable<{}> => {
    const options = { setID: setID };
    return this.http.post(
      'https://services.corneliuses.com/get-lego-instructions',
      options,
      this.headers
    );
  }
  getSets: Function = (): Observable<{}> => this.http.get(
    'https://services.corneliuses.com/get-lego-sets',
    this.headers
  )
}
