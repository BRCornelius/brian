import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeRequestComponent } from './recipe-request.component';

describe('RecipeRequestComponent', () => {
  let component: RecipeRequestComponent;
  let fixture: ComponentFixture<RecipeRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
