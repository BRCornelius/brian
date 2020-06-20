import { Component, OnInit, Input } from '@angular/core';
import { IOptions } from 'src/app/interfaces';

@Component({
  selector: 'common-radio',
  templateUrl: './radio.component.html',
  styleUrls: ['./radio.component.css']
})
export class RadioComponent implements OnInit {

  constructor() {}


  @Input() $option: IOptions;
  @Input() filterFunction: Function;

  ngOnInit() {}
  setFacet: Function = ($event): void => this.filterFunction($event);
}
