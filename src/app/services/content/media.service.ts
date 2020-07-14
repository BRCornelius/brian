import { Injectable } from '@angular/core';

import { Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AwsService } from '../site';
import { IOTFVideo, IKidsVideo } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(
    private aws: AwsService,
    private http: HttpClient
  ) { }

  headers = this.aws.httpOptions;

  activeOtfVideoTitle: string;
  activeOtfVideoUrl: string;
  otfVideos: IOTFVideo[];

  getOtfVideos: Function = (): Subscription => this.http.get(
    'https://services.corneliuses.com/get-otf',
    this.headers)
    .subscribe((res: any) => {
      this.otfVideos = res.data;
      const limit = Math.floor(Math.random() * (this.otfVideos.length - 1));
      this.activeOtfVideoTitle = this.otfVideos[limit].title;
      this.activeOtfVideoUrl = this.activeOtfVideoTitle;
    }
  )

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
