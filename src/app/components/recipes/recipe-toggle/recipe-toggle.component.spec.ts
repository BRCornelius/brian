import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeToggleComponent } from './recipe-toggle.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('RecipeToggleComponent', () => {
  let component: RecipeToggleComponent;
  let fixture: ComponentFixture<RecipeToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeToggleComponent ],
      imports: [ NoopAnimationsModule ], 
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
