import { TestBed } from '@angular/core/testing';

import { OtfService } from './otf.service';

describe('OtfService', () => {
  let service: OtfService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ OtfService ]
    });
    service = TestBed.get(OtfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should hold properties for OrangeTheory', () => {
    const { categories, groups, options } = service;
    expect(categories.length).toBeGreaterThanOrEqual(1);
    expect(groups.length).toBeGreaterThanOrEqual(1);
    expect(options.length).toBeGreaterThanOrEqual(1);
  })
});
