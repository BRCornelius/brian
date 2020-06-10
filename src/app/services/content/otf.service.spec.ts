import { TestBed } from '@angular/core/testing';

import { OtfService } from './otf.service';

describe('OtfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OtfService = TestBed.get(OtfService);
    expect(service).toBeTruthy();
  });
});
