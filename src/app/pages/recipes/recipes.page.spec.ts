import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesPage } from './recipes.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('RecipesPage', () => {
  let component: RecipesPage;
  let fixture: ComponentFixture<RecipesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipesPage ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
