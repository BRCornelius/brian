import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToTryComponent } from './to-try.component';

describe('ToTryComponent', () => {
  let component: ToTryComponent;
  let fixture: ComponentFixture<ToTryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToTryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToTryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
