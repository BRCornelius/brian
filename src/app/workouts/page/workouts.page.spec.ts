import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutsPage } from './workouts.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { OtfUrlPipe } from '../pipes/otf-url.pipe';

describe('WorkoutsComponent', () => {
  let component: WorkoutsPage;
  let fixture: ComponentFixture<WorkoutsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutsPage, OtfUrlPipe ],
      imports: [ HttpClientModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkoutsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
