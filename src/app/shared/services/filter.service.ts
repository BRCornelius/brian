import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  facets: any[] = [];

  checkFacetsForKey: Function = (facetArray, facet): boolean => {
    return facetArray.reduce((agg, curr) => {
      if (agg === true) {
        return agg;
      } else {
         const key = Object.keys(curr)[0];
         return Boolean(facet[key]);
      }
    }, false);
  }
  checkFacetsIndividually: Function = (facetArray, newFacet): any[] => {
    const key = Object.keys(newFacet)[0];
    return facetArray.map(facet => {
      if (facet[key]) {
        Object.assign(facet, newFacet);
      }
      return facet;
    });
  }
  // tslint:disable-next-line:max-line-length
  filterContent: Function = (content, facets): any[] => facets.reduce(
    (agg, curr) => {
      const facetKey = Object.keys(curr)[0];
      const facetValue = curr[facetKey];
      const result = agg.filter(item => item[facetKey.toLowerCase()] === facetValue);
      return result;
    }, content)

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
  }
}
