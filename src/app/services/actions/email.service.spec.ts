import { TestBed } from '@angular/core/testing';

import { EmailService } from './email.service';
import { HttpClientModule } from '@angular/common/http';

describe('EmailService', () => {
  let service: EmailService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [EmailService]
    });
    service = TestBed.get(EmailService);
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
