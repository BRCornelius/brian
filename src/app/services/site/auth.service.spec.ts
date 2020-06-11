import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';

describe('AuthService', () => {
  let service: AuthService;
  const testCredentials = { name: 'testUser', password: 'testPassword' };
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ AuthService ]
    });
    service = TestBed.get(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should deny bad credentials', (done: DoneFn) => {
    service.credentials = testCredentials;
    service.authenticate.subscribe((response: any) => {
      expect(response.body).toBeFalsy();
      done();
    })
  });

  it('should permit good authorization', (done: DoneFn) => {
    service.isAuthorized().subscribe((response: any) => {
      expect(response.body).toBeTruthy();
      done();
    })
  });

  it('should hold auth properties', () => {
    service.credentials = testCredentials;
    const { authorized, credentials } = service;
    expect(authorized).toBeDefined();
    expect(credentials).toBeDefined();
  })
});
