import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsCardComponent } from './kids-card.component';

describe('KidsCardComponent', () => {
  let component: KidsCardComponent;
  let fixture: ComponentFixture<KidsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
