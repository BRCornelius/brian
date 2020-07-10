import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/services';

@Component({
  selector: 'kids-page',
  templateUrl: './kids.page.html',
  styleUrls: ['./kids.page.css'],
})
export class KidsPage implements OnInit {

  constructor(public media: MediaService) { }

  interstitial = 'https://assets.corneliuses.com/photos/common/interstitial-syd.gif';

  ngOnInit() {
    this.media.getKidsVideos();
  }
}
