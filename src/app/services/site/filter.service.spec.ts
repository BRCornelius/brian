import { TestBed } from '@angular/core/testing';

import { FilterService } from './filter.service';

describe('FilterService', () => {

  let service: FilterService;
  const mockStateFacets = [
    {
      category: 'comedy'
    },
    {
      count: 3
    }
  ];
  const mockVideos = [
    {title: 'Funny Movie', category: 'comedy', count: 3},
    {title: 'Sad Movie', category: 'drama', count: 2},
    {title: 'Sappy Movie', category: 'romance', count: 1}
  ];
  const mockFacets = [
    {title: 'category', options: ['comedy', 'drama', 'romance']}
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ FilterService ]
    });
    service = TestBed.get(FilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should hold state for filter', () => {
    const { facets } = service;
    expect(facets).toBeDefined();
  });

  it('can check state facets for a value', () => {
    const checked = service.checkFacetsForKey(mockStateFacets, { category: 'comedy' });
    expect(checked).toBeTruthy();
  });

  it('can check state facets individually', () => {
    const updatedFacets = service.checkFacetsIndividually(mockStateFacets, { category: 'horror' });
    const checked = service.checkFacetsForKey(updatedFacets, { category: 'horror' });
    expect(checked).toBeTruthy();
  });

  it('can update state facets', () => {
    service.updateFacets({target: { name: 'category', value: 'horror' } });
    const updatedFacets = service.facets;
    const checked = service.checkFacetsForKey(updatedFacets, { category: 'horror' });
    expect(checked).toBeTruthy();
  });

  it('can filter content', () => {
    const testingFacets = [
      {
        category: 'comedy'
      }
    ];
    const filtered = service.filterContent(mockVideos, testingFacets);
    expect(filtered[0].category).toBe('comedy');
  });
});
