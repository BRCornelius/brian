import { TestBed } from '@angular/core/testing';

import { ContactService } from './contact.service';
import { HttpClientModule } from '@angular/common/http';

describe('ContactService', () => {
  let service: ContactService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ContactService]
    });
    service = TestBed.get(ContactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should send an email', (done: DoneFn) => {
  //   service.sendEmail().subscribe(response => {
  //     expect(response).toBeTruthy();
  //     done();
  //   });
  // })
});
