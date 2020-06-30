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
    public media: MediaService,
    public otf: OtfService
  ) { }

  // tslint:disable-next-line:max-line-length
  errorText = 'You are not authorized to view this page. Please email me via the contact below to request access.';
  interstitial = 'https://assets.corneliuses.com/photos/common/interstitial-typing.gif';

  ngOnInit() {
    if (this.auth.authorized) {
      this.media.getOtfVideos();
    }
  }
}
