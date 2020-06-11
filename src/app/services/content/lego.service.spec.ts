import { TestBed } from '@angular/core/testing';

import { LegoService } from './lego.service';
import { HttpClientModule } from '@angular/common/http';

describe('LegoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule ]
  }));

  it('should be created', () => {
    const service: LegoService = TestBed.get(LegoService);
    expect(service).toBeTruthy();
  });
});
