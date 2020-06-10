import { Component, OnInit, Input } from '@angular/core';
import { IOTFVideo, IKidsVideo, IOptions } from 'src/app/utilities';

@Component({
  selector: 'video-display',
  templateUrl: './video-display.component.html',
  styleUrls: ['./video-display.component.css'],
})
export class VideoDisplayComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  @Input() videos: IOTFVideo[] | IKidsVideo[];
  @Input() activeVideoTitle: string;
  @Input() activeVideoUrl: string;
  @Input() displayFilter: boolean;
  @Input() $options: IOptions[] = [];

  setActiveVideo: Function = (event): void => {
    this.activeVideoTitle = event.target.title;
    this.activeVideoUrl = event.target.id;
  };
}
