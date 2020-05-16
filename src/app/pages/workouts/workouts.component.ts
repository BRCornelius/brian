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
      this.activeVideoUrl = this.videos[0].URL.S;
    });
  }

  activeVideoTitle;
  activeVideoUrl;
  videos;
}
