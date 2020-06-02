import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { IKidsVideo, IOTFVideo, IOptions } from '../../../utilities';

@Component({
  selector: 'app-media-grid',
  templateUrl: './media-grid.component.html',
  styleUrls: ['./media-grid.component.css']
})
export class MediaGridComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  @Input() media: IKidsVideo[] | IOTFVideo[];
  @Input() setActiveMedia: Function;
  @Input() displaySort: boolean;
  @Input() $options: IOptions[];

  currentRoute: string = this.router.url.replace('/', '');

  checkRoute: Function = (route: string): boolean => {
    return route === this.currentRoute;
  }
  setActive: Function = ($event): void => this.setActiveMedia($event);
}
