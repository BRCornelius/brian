import { Injectable } from '@angular/core';

import { ajax } from 'rxjs/ajax';
import { Observable } from 'rxjs';
import { IFacet } from '../utilities';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor() { }

  kidsVideos: Observable<any> = ajax('https://services.corneliuses.com/get-kids-videos');
  otfVideos: Observable<any> = ajax('https://services.corneliuses.com/get-otf');

  filterVideos: Function = (videos: any[], facets: IFacet[]) =>
    facets.reduce((agg, curr) => {
      const facetKey = Object.keys(curr)[0];
      const facetValue = curr[facetKey];
      return agg.filter(video => video[facetKey] === facetValue);
  }, videos);
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
