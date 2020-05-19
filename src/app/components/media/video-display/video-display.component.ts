import { Component, OnInit, Input } from '@angular/core';
import { OtfService } from 'src/app/services';

@Component({
  selector: 'app-video-display',
  templateUrl: './video-display.component.html',
  styleUrls: ['./video-display.component.css']
})
export class VideoDisplayComponent implements OnInit {

  constructor(private otf: OtfService) { }

  ngOnInit() {}

  @Input() videos;
  @Input() activeVideoTitle;
  @Input() activeVideoUrl;

  setActiveVideo = event => {
    console.log(event.target)
    this.activeVideoTitle = event.target.title;
    this.activeVideoUrl = event.target.id;
  };
}
