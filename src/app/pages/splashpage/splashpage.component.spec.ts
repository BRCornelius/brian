import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplashPage } from './splashpage.component';

describe('SplashPage', () => {
  let component: SplashPage;
  let fixture: ComponentFixture<SplashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
