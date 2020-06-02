import { Injectable } from '@angular/core';
import { IFacet } from '../utilities';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  constructor() { }

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
    return facetArray.map(facet => {
      if (facet[key]) {
        Object.assign(facet, newFacet);
      }
      return facet;
    });
  };
  filterContent = (content, facets) => facets.reduce((agg, curr) => {
    const facetKey = Object.keys(curr)[0];
    const facetValue = curr[facetKey];
    return agg.filter(item => item[facetKey.toLowerCase()] === facetValue);
  }, content);
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
