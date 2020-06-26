import { Component, Input } from '@angular/core';

@Component({
  selector: 'media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.css']
})
export class MediaCardComponent {

  constructor() { }

  @Input() thumbnail: string;
  @Input() source: string;
  @Input() header: string;

}
