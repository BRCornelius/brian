import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/services';

@Component({
  selector: 'app-kids',
  templateUrl: './kids.component.html',
  styleUrls: ['./kids.component.css']
})
export class KidsPage implements OnInit {

  constructor(private media: MediaService) { }

  ngOnInit() {
    this.media.kidsVideos.subscribe(res => {
      this.videos = res.response.data.Items;
      this.activeVideoTitle = this.videos[0].TITLE.S;
      this.activeVideoUrl = this.videos[0].URL.S;
    });
  }

  activeVideoTitle;
  activeVideoUrl;
  videos;
}
