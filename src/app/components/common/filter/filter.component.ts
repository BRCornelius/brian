import { Component, OnInit, Input } from '@angular/core';
import { IOptions } from 'src/app/utilities';
import { FilterService } from 'src/app/services/filter.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  constructor(private filter: FilterService) { }

  ngOnInit() {
  }

  @Input() $options: IOptions[];
  @Input() filterFunction: Function;

  update: Function = (event) => {
    this.filter.updateFacets(event);
    this.filterFunction();
  };
}
