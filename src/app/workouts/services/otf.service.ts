import { Injectable } from '@angular/core';
import { AwsService, FilterService } from 'src/app/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { IOTFVideo, IOptions } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class OtfService {

  constructor(
    private aws: AwsService,
    private http: HttpClient,
    private filter: FilterService
  ) { }

  headers = this.aws.httpOptions;

  activeOtfVideoTitle: string;
  activeOtfVideoUrl: string;
  allOtfVideos: IOTFVideo[];
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
      this.allOtfVideos = res.data;
      this.otfVideos = [...this.allOtfVideos];
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


  updateDisplayedMedia: Function = (): void => {
    const allVideos = [...this.allOtfVideos];
    const newMedia = this.filter.filterContent(allVideos, this.filter.facets);
    this.otfVideos = newMedia;
  }
}
