import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { IKidsVideo, IOTFVideo, IOptions, IFacet } from '../../../utilities';
import { SortService } from 'src/app/services/sort.service';

@Component({
  selector: 'app-media-grid',
  templateUrl: './media-grid.component.html',
  styleUrls: ['./media-grid.component.css']
})
export class MediaGridComponent implements OnInit {

  constructor(
    private router: Router,
    private sort: SortService
    ) { }

  ngOnInit() {
    this.displayedMedia = this.media
  }

  @Input() media: IKidsVideo[] | IOTFVideo[];
  @Input() setActiveMedia: Function;
  @Input() displaySort: boolean;
  @Input() $options: IOptions[];

  currentRoute: string = this.router.url.replace('/', '');
  displayedMedia: IKidsVideo[] | IOTFVideo[];

  checkRoute: Function = (route: string): boolean => {
    return route === this.currentRoute;
  }
  updateDisplayedMedia: Function = (): void => {
    const newMedia = this.sort.filterContent(this.media, this.sort.facets);
    this.displayedMedia = newMedia;
  };
  setActive: Function = ($event): void => this.setActiveMedia($event);
}
