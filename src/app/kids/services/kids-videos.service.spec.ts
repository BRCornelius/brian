import { TestBed } from '@angular/core/testing';

import { KidsVideosService } from './kids-videos.service';

describe('KidsVideosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KidsVideosService = TestBed.get(KidsVideosService);
    expect(service).toBeTruthy();
  });
});
