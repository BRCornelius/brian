import { TestBed } from '@angular/core/testing';

import { NavigationService } from './navigation.service';

describe('NavigationService', () => {
  let service: NavigationService;
  beforeEach(() => TestBed.configureTestingModule({}));
  service = TestBed.get(NavigationService);

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should hold state', () => {
    const { navLinks } = service;
    expect(navLinks).toBeDefined();
  })
});
