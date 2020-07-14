import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsPage } from './kids.page';
import { KidsVideoPipe } from 'src/app/pipes';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

describe('KidsPage', () => {
  let component: KidsPage;
  let fixture: ComponentFixture<KidsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KidsPage, KidsVideoPipe ],
      imports: [ HttpClientModule ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
