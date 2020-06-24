import { Component, OnInit, Input } from '@angular/core';
import { IOTFVideo, IKidsVideo, IOptions } from 'src/app/interfaces';

@Component({
  selector: 'video-display',
  templateUrl: './video-display.component.html',
  styleUrls: ['./video-display.component.css'],
})
export class VideoDisplayComponent implements OnInit {

  constructor() {}

  @Input() videos: IOTFVideo[] | IKidsVideo[];
  @Input() activeVideoTitle: string;
  @Input() activeVideoUrl: string;
  @Input() displayFilter: boolean;
  @Input() displayControls:boolean;
  @Input() $options: IOptions[] = [];

  ngOnInit() {}

  handleClick: Function = (media): void => {
    this.activeVideoTitle = media.title;
    this.activeVideoUrl = media.src;
  }
}
