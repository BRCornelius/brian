import { Component, OnInit } from '@angular/core';
import { MediaService, OtfService, AuthService } from 'src/app/services';
import { IOTFVideo, IFormattedOTFVideo } from '../../utilities';

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
      this.videos = this.otf.formatVideos(res.response.data.Items);
      const limit = Math.floor(Math.random() * (this.videos.length - 1));
      this.activeVideoTitle = this.videos[limit].title;
      this.activeVideoUrl = this.otf.toUri(this.activeVideoTitle);
    });
  }

  activeVideoTitle: string;
  activeVideoUrl: string;
  errorText: string = 'You are not authorized to view this page.  Please email brian@corneliuses.com to request access.'
  isAuthorized: boolean;
  videos: IFormattedOTFVideo[];
}
