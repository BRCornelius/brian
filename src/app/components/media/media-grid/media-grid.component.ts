import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-media-grid',
  templateUrl: './media-grid.component.html',
  styleUrls: ['./media-grid.component.css']
})
export class MediaGridComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() media;
  @Input() setActiveMedia;
  setActive = $event => this.setActiveMedia($event);
}
