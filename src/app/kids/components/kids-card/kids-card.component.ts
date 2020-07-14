import { Component, Input } from '@angular/core';

@Component({
  selector: 'kids-card',
  templateUrl: './kids-card.component.html',
  styleUrls: ['./kids-card.component.css']
})
export class KidsCardComponent {

  constructor() { }

  @Input() thumbnail: string;
  @Input() source: string;
  @Input() header: string;

}
