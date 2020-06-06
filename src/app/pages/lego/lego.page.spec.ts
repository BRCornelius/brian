import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegoPage } from './lego.page';

describe('LegoPage', () => {
  let component: LegoPage;
  let fixture: ComponentFixture<LegoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegoPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
