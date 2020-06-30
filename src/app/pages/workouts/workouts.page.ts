import { Component, OnInit, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MediaService, OtfService, AuthService } from 'src/app/services';
import { IFormattedOTFVideo, IOptions, IOTFVideo } from '../../interfaces';
import { OtfUrlPipe, OtfVideoPipe } from 'src/app/pipes';

@Component({
  selector: 'workout-page',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.css'],
  providers: [OtfUrlPipe, OtfVideoPipe]
})
export class WorkoutsPage implements OnInit {

  constructor(
    public auth: AuthService,
    private media: MediaService,
    private otf: OtfService
  ) { }

  activeVideoTitle: string;
  activeVideoUrl: string;
  // tslint:disable-next-line:max-line-length
  errorText = 'You are not authorized to view this page. Please email me via the contact below to request access.';
  options: IOptions[] = this.otf.options;
  interstitial = 'https://assets.corneliuses.com/photos/common/interstitial-typing.gif';
  videos: IOTFVideo[];

  ngOnInit() {
    if (this.auth.authorized) {
      this.media.otfVideos.subscribe(res => {
        this.videos = res.data.Items;
        const limit = Math.floor(Math.random() * (this.videos.length - 1));
        this.activeVideoTitle = this.videos[limit].TITLE.S;
        this.activeVideoUrl = this.activeVideoTitle;
      });
    }
  }
}
