import { Component, OnInit, Input } from '@angular/core';
import { IOptions } from 'src/app/utilities';
import { SortService } from 'src/app/services/sort.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  constructor(private sort: SortService) { }

  ngOnInit() {
  }

  @Input() $options: IOptions[];
  @Input() filter: Function;

  update: Function = (event) => {
    this.sort.updateFacets(event);
    this.filter();
  };
}
