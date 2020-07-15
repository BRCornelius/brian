import { Component, Input } from '@angular/core';
import { IOptions } from 'src/app/core';

@Component({
  selector: 'common-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent {

  constructor() {}


  @Input() $option: IOptions;
  @Input() filterFunction: Function;

  setFacet: Function = ($event): void => this.filterFunction($event);
}
