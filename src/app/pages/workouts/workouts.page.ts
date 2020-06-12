import { Component, OnInit, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MediaService, OtfService, AuthService } from 'src/app/services';
import { IFormattedOTFVideo, IOptions, IOTFVideo } from '../../utilities';
import { OtfUrlPipe, OtfVideoPipe } from 'src/app/pipes';

@Component({
  selector: 'workouts-page',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.css'],
  providers: [OtfUrlPipe, OtfVideoPipe]
})
export class WorkoutsPage implements OnInit {

  constructor(
    private auth: AuthService,
    private media: MediaService,
    private otf: OtfService
  ) { }

  ngOnInit() {
    this.auth.isAuthorized();
    this.media.otfVideos.subscribe(res => {
      this.videos = res.data.Items;
      const limit = Math.floor(Math.random() * (this.videos.length - 1));
      this.activeVideoTitle = this.videos[limit].TITLE.S;
      this.activeVideoUrl = this.activeVideoTitle;
    });
  }

  activeVideoTitle: string;
  activeVideoUrl: string;
  errorText: string = 'You are not authorized to view this page.  Please email brian@corneliuses.com to request access.'
  options: IOptions[] = this.otf.options;
  isAuthorized: boolean = this.auth.authorized;
  videos: IOTFVideo[];
}
