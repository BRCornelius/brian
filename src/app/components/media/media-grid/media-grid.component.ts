import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { IMedia } from '../../../utilities';

@Component({
  selector: 'app-media-grid',
  templateUrl: './media-grid.component.html',
  styleUrls: ['./media-grid.component.css']
})
export class MediaGridComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  @Input() media: IMedia[];
  @Input() setActiveMedia: Function;

  currentRoute: string = this.router.url.replace('/', '');

  checkRoute: Function = (route: string): boolean => {
    return route === this.currentRoute;
  }
  setActive: Function = ($event): void => this.setActiveMedia($event);
}
