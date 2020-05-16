import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-display',
  templateUrl: './video-display.component.html',
  styleUrls: ['./video-display.component.css']
})
export class VideoDisplayComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() videos;
  @Input() activeVideoTitle;
  @Input() activeVideoUrl;
  
  setActiveVideo = event => {
    this.activeVideoUrl = event.target.id;
    this.activeVideoTitle = event.target.title;
  };
}
