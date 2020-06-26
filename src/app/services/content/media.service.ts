import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AwsService } from '../site';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(
    private aws: AwsService,
    private http: HttpClient) { }
  headers = this.aws.httpOptions;
  kidsVideos: Observable<any> = this.http.get(
    'https://services.corneliuses.com/get-kids-videos',
    this.headers
  );
  otfVideos: Observable<any> = this.http.get(
    'https://services.corneliuses.com/get-otf',
    this.headers
  );

  sortVideos: Function = (videos: any[], option: string): any[] =>
    videos.sort((a, b) => {
      if ( a[option] < b[option] ) {
        return -1;
      }
      if ( a[option] > b[option] ) {
        return 1;
      }
      return 0;
  })
}
