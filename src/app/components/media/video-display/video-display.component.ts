import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/services/media.service';

@Component({
  selector: 'app-video-display',
  templateUrl: './video-display.component.html',
  styleUrls: ['./video-display.component.css']
})
export class VideoDisplayComponent implements OnInit {

  constructor(private media: MediaService) { }

  ngOnInit() {
    this.media.videos.subscribe(res => {
      this.videos = res.response.data.Items;
      this.activeVideoTitle = this.videos[0].TITLE.S;
      this.activeVideoUrl = this.videos[0].URL.S;
    });
  }
  activeVideoTitle;
  activeVideoUrl;
  setActiveVideo = event => {
    this.activeVideoUrl = event.target.id;
    this.activeVideoTitle = event.target.title;
  };
  videos;
}
