import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({'X-Api-Key': environment.apiKey})
  };
  kidsVideos: Observable<any> = this.http.get('https://services.corneliuses.com/get-kids-videos');
  otfVideos: Observable<any> = this.http.get('https://services.corneliuses.com/get-otf', this.httpOptions);

  sortVideos: Function = (videos: any[], option: string): any[] =>
    videos.sort((a,b) => {
      if ( a[option] < b[option] ){
        return -1;
      }
      if ( a[option] > b[option] ){
        return 1;
      }
      return 0;
  });
}
