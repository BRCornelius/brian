import { Component, OnInit } from '@angular/core';
import { MediaService, OtfService, AuthService } from 'src/app/services';
import { OtfUrlPipe } from 'src/app/pipes';

@Component({
  selector: 'workout-page',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.css'],
  providers: [OtfUrlPipe]
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
    // tslint:disable-next-line:max-line-length
  authInterstitial = 'https://assets.corneliuses.com/photos/common/interstitial-farouk.gif';

  ngOnInit() {
    if (this.auth.authorized) {
      this.media.getOtfVideos();
    } else {
      this.auth.isAuthorized();
    }
  }
}
