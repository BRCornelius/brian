import { Component, OnInit } from '@angular/core';
import { AuthService, FilterService } from 'src/app/services';

import { OtfUrlPipe } from '../pipes/otf-url.pipe';
import { OtfService } from '../services/otf.service';

@Component({
  selector: 'workout-page',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.css'],
  providers: [OtfUrlPipe]
})
export class WorkoutsPage implements OnInit {

  constructor(
    public auth: AuthService,
    public otf: OtfService
  ) { }

    // tslint:disable-next-line:max-line-length
  errorText = 'You are not authorized to view this page. Please email me via the contact below to request access.';
  interstitial = 'https://assets.corneliuses.com/photos/common/interstitial-typing.gif';
    // tslint:disable-next-line:max-line-length
  authInterstitial = 'https://assets.corneliuses.com/photos/common/interstitial-farouk.gif';

  ngOnInit() {
    if (this.auth.authorized) {
      this.otf.getOtfVideos();
    } else {
      this.auth.isAuthorized();
    }
  }
}
