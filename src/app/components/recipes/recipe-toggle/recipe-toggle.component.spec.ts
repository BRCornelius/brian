import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeToggleComponent } from './recipe-toggle.component';

describe('RecipeToggleComponent', () => {
  let component: RecipeToggleComponent;
  let fixture: ComponentFixture<RecipeToggleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeToggleComponent ]
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
