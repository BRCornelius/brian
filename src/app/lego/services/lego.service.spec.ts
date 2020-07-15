import { TestBed } from '@angular/core/testing';

import { LegoService } from './lego.service';
import { HttpClientModule } from '@angular/common/http';

describe('LegoService', () => {
  let service: LegoService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ LegoService ]
    });
    service = TestBed.get(LegoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should get all your sets', (done: DoneFn) => {
  //   service.getSets().subscribe(response => {
  //     const sets = JSON.parse(response.body).sets;
  //     expect(sets.filter(set => set.name === "Poppy's Carriage")).toBeTruthy();
  //     done();
  //   })
  // })

  // it('should get instructions for a set', (done: DoneFn) => {
  //   service.getInstructions(29794).subscribe(response => {
  //     const res = JSON.parse(response.body);
  //     expect(res.instructions.length).toBeGreaterThanOrEqual(1);
  //     done();
  //   })
  // })
});
