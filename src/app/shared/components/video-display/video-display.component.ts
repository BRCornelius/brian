import { Component, Input } from '@angular/core';

@Component({
  selector: 'media-video-display',
  templateUrl: './video-display.component.html',
  styleUrls: ['./video-display.component.css'],
})
export class VideoDisplayComponent {

  constructor() {}

  @Input() videos: any[];
  @Input() activeVideoTitle: string;
  @Input() activeVideoUrl: string;
  @Input() displayControls: boolean;

  handleClick: Function = (media): void => {
    this.activeVideoTitle = media.title;
    this.activeVideoUrl = media.src;
  }
}
