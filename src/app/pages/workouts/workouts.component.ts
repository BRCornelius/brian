import { Component, OnInit } from '@angular/core';
import { MediaService } from 'src/app/services';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsPage implements OnInit {

  constructor(private media: MediaService) { }

  ngOnInit() {
    this.media.otfVideos.subscribe(res => {
      this.videos = res.response.data.Items;
      this.activeVideoTitle = this.videos[0].TITLE.S;
      const uri = this.activeVideoTitle.replace(/\//g, '.');
      this.activeVideoUrl = `https://s3.amazonaws.com/otf.corneliuses.com/videos/${uri}.mp4`;
    });
  }

  activeVideoTitle;
  activeVideoUrl;
  videos;
}
