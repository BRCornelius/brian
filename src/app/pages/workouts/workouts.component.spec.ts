import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutsPage } from './workouts.component';

describe('WorkoutsComponent', () => {
  let component: WorkoutsPage;
  let fixture: ComponentFixture<WorkoutsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkoutsPage ]
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
