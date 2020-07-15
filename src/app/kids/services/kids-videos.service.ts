import { Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { IKidsVideo } from '../models';
import { AwsService } from 'src/app/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KidsVideosService {

  constructor(
    private aws: AwsService,
    private http: HttpClient
  ) { }

  headers = this.aws.httpOptions;

  activeKidsVideoTitle: string;
  activeKidsVideoURL: string;
  kidsVideos: IKidsVideo[];

  getKidsVideos: Function = (): Subscription => this.http.get(
    'https://services.corneliuses.com/get-kids-videos',
    this.headers)
    .subscribe((res: any) => {
      this.kidsVideos = res.data;
      this.activeKidsVideoTitle = this.kidsVideos[0].title;
      this.activeKidsVideoURL = this.kidsVideos[0].url;
    }
  )
  setActiveKidsVideo: Function = $event => {
    this.activeKidsVideoTitle = $event.target.title;
    this.activeKidsVideoURL = $event.target.id;
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
}
