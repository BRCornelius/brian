import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeRequestComponent } from './recipe-request.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

describe('RecipeRequestComponent', () => {
  let component: RecipeRequestComponent;
  let fixture: ComponentFixture<RecipeRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeRequestComponent ],
      imports: [ HttpClientModule, MatGridListModule, ReactiveFormsModule ]
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
