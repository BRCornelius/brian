import { Component, Input } from '@angular/core';
import { IOptions } from '../../models';
import { FilterService } from '../../services';

@Component({
  selector: 'common-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  constructor(private filter: FilterService) {}

  @Input() $options: IOptions[];
  @Input() filterFunction: Function;

  update: Function = (event) => {
    this.filter.updateFacets(event);
    this.filterFunction();
  }
}
