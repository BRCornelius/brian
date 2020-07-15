import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegoPage } from './lego.page';
import { LegoSetPipe, SafePipe } from 'src/app/lego/pipes';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

describe('LegoPage', () => {
  let component: LegoPage;
  let fixture: ComponentFixture<LegoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegoPage, LegoSetPipe, SafePipe ],
      imports: [ HttpClientModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
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
