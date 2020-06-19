import { Component, OnInit, Input } from '@angular/core';
import { IOptions } from '../../../interfaces';
import { FilterService } from '../../../services';

@Component({
  selector: 'common-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private filter: FilterService) {}

  @Input() $options: IOptions[];
  @Input() filterFunction: Function;

  ngOnInit() {}

  update: Function = (event) => {
    this.filter.updateFacets(event);
    this.filterFunction();
  }
}
