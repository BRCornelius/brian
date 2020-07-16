import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { AwsService } from '../../core';
import { ILegoSet, ILegoSetNumber, IUrl } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LegoService {

  constructor(
    private aws: AwsService,
    private http: HttpClient
  ) { }

  headers: any = this.aws.httpOptions;
  instructions: string[];
  mockData: ILegoSet[] = [
    { name: 'Poppy\'s Village', setID: 29367, image: { thumbnailURL: '' } }
  ];
  mySets: ILegoSet[];

  addSet: Function = (setNumber: ILegoSetNumber): Observable<{}> => this.http.post(
    'https://services.corneliuses.com/add-lego-set',
    setNumber,
    this.headers
  )
  getInstructions: Function = (setID): Subscription => {
    const options = { setID: setID };
    return this.http.post(
      'https://services.corneliuses.com/get-lego-instructions',
      options,
      this.headers
    ).subscribe((res: any) => {
      const body = JSON.parse(res.body);
      this.instructions = body.instructions.reduce(
        (agg: string[], curr: IUrl, index: number) => {
          if (index % 2 === 0) {
            agg.push(curr.URL);
            return agg;
          } else {
            return agg;
          }
        }, []);
    });
  }
  getSets: Function = (): Subscription => this.http.get(
    'https://services.corneliuses.com/get-lego-sets',
    this.headers
  ).subscribe((res: any) => {
    this.mySets = JSON.parse(res.body).sets;
    // this.mySets = this.mockData;                        // For Testing
  })

}
