import { TestBed } from '@angular/core/testing';

import { LegoService } from './lego.service';

describe('LegoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LegoService = TestBed.get(LegoService);
    expect(service).toBeTruthy();
  });
});
