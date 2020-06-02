import { Component, OnInit, Input } from '@angular/core';
import { IFacet } from 'src/app/utilities';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() $options;

  facets: IFacet[] = [];

  checkFacetsForKey: Function = (facetArray, facet): boolean => {
    return facetArray.reduce((agg, curr) => {
      if (agg === true) {
        return agg
      } else {
         const key = Object.keys(curr)[0];
         return Boolean(facet[key])
      }
    }, false);
  };
  checkFacetsIndividually: Function = (facetArray, newFacet): IFacet[] => {
    const key = Object.keys(newFacet)[0];
    const value = newFacet[key];
    return facetArray.map(facet => {
      if (facet[key]) {
        Object.assign(facet, newFacet);
      }
      return facet;
    });
  };
  updateFacets: Function = (event): void => {
    const key = event.target.name;
    const value = event.target.value;
    const newFacet = {};
    newFacet[key] = value;
    if (!this.checkFacetsForKey(this.facets, newFacet)) {
      this.facets.push(newFacet);
    } else {
      this.facets = this.checkFacetsIndividually(this.facets, newFacet);
    }
  };
}
