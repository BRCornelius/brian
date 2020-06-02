import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { IKidsVideo, IOTFVideo, IOptions, IFacet } from '../../../utilities';
import { FilterService } from '../../../services';

@Component({
  selector: 'app-media-grid',
  templateUrl: './media-grid.component.html',
  styleUrls: ['./media-grid.component.css']
})
export class MediaGridComponent implements OnInit {

  constructor(
    private router: Router,
    private filter: FilterService
  ) { }

  ngOnInit() {}

  @Input() media: IKidsVideo[] | IOTFVideo[];
  @Input() listedMedia: IKidsVideo[] | IOTFVideo[];
  @Input() setActiveMedia: Function;
  @Input() displayFilter: boolean;
  @Input() $options: IOptions[];

  currentRoute: string = this.router.url.replace('/', '');


  checkRoute: Function = (route: string): boolean => {
    return route === this.currentRoute;
  }
  updateDisplayedMedia: Function = (): void => {
    this.media = this.listedMedia;
    const newMedia = this.filter.filterContent(this.media, this.filter.facets);
    this.media = newMedia;
  };
  setActive: Function = ($event): void => this.setActiveMedia($event);
}
