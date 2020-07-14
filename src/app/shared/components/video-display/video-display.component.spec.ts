import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoDisplayComponent } from './video-display.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('VideoDisplayComponent', () => {
  let component: VideoDisplayComponent;
  let fixture: ComponentFixture<VideoDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoDisplayComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
