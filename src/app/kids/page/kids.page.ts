import { Component, OnInit } from '@angular/core';
import { KidsVideosService } from '../services/kids-videos.service';

@Component({
  selector: 'kids-page',
  templateUrl: './kids.page.html',
  styleUrls: ['./kids.page.css'],
})
export class KidsPage implements OnInit {

  constructor(public kids: KidsVideosService) { }

  interstitial = 'https://assets.corneliuses.com/photos/common/interstitial-syd.gif';

  ngOnInit() {
    this.kids.getKidsVideos()
  }
}
