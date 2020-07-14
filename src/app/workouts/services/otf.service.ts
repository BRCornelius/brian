import { Injectable } from '@angular/core';
import { AwsService } from 'src/app/services';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { IOTFVideo, IOptions } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class OtfService {

  constructor(
    private aws: AwsService,
    private http: HttpClient
  ) { }

  headers = this.aws.httpOptions;

  activeOtfVideoTitle: string;
  activeOtfVideoUrl: string;
  otfVideos: IOTFVideo[];

  categories: string[] = ['Endurance', 'Heart', 'Mayhem', 'Power', 'Strength'];
  groups: string[] = ['Back', 'Chest', 'Legs', '??'];
  options: IOptions[] = [
    {
      title: 'Category',
      options: this.categories,
    }, {
      title: 'Group',
      options: this.groups,
    }
  ];

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

  setActiveOtfVideo: Function = $event => {
    this.activeOtfVideoUrl = $event.target.title;
    this.activeOtfVideoTitle = $event.target.title;
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
}
