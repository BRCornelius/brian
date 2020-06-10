import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'media-card',
  templateUrl: './media-card.component.html',
  styleUrls: ['./media-card.component.css']
})
export class MediaCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() thumbnail: string;
  @Input() source: string;
  @Input() header: string;
}
