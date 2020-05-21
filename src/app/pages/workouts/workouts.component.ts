import { Component, OnInit } from '@angular/core';
import { MediaService, OtfService, AuthService } from 'src/app/services';
import { IOTFVideo } from '../../utilities/types';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.component.html',
  styleUrls: ['./workouts.component.css']
})
export class WorkoutsPage implements OnInit {

  constructor(
    private auth: AuthService,
    private media: MediaService,
    private otf: OtfService
  ) { }

  ngOnInit() {
    this.auth.isAuthorized().subscribe(res => {
      this.isAuthorized = res.body
    });
    this.media.otfVideos.subscribe(res => {
      this.videos = res.response.data.Items;
      this.activeVideoTitle = this.videos[0].TITLE.S;
      this.activeVideoUrl = this.otf.toUri(this.activeVideoTitle);
    });
  }

  activeVideoTitle: string;
  activeVideoUrl: string;
  isAuthorized: boolean;
  videos: IOTFVideo[];
}
