import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/services';
import { IKidsVideo } from 'src/app/utilities';
import { KidsVideoPipe } from 'src/app/pipes/';

@Component({
  selector: 'kids-page',
  templateUrl: './kids.page.html',
  styleUrls: ['./kids.page.css'],
  providers: [KidsVideoPipe]
})
export class KidsPage implements OnInit {

  constructor(private media: MediaService) { }

  ngOnInit() {
    this.media.kidsVideos.subscribe(res => {
      this.videos = res.data.Items;
      this.activeVideoTitle = this.videos[0].TITLE.S;
      this.activeVideoUrl = this.videos[0].URL.S;
    });
  }

  activeVideoTitle: string;
  activeVideoUrl: string;
  interstitial: string = "https://assets.corneliuses.com/photos/common/interstitial-syd.gif";
  videos: IKidsVideo[];
}
