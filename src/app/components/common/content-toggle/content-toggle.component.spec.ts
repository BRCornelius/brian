import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentToggleComponent } from './content-toggle.component';

describe('ContentToggleComponent', () => {
  let component: ContentToggleComponent;
  let fixture: ComponentFixture<ContentToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentToggleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
