import { Component, OnInit, Input } from '@angular/core';
import { IOptions } from 'src/app/utilities';

@Component({
  selector: 'common-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  constructor() {}

  ngOnInit() {};

  @Input() $option: IOptions;
  @Input() filterFunction: Function;

  setFacet: Function = ($event): void => this.filterFunction($event);
}
