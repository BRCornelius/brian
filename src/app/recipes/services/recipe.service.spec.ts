import { TestBed } from '@angular/core/testing';

import { RecipeService } from './recipe.service';
import { HttpClientModule } from '@angular/common/http';

describe('RecipeService', () => {
  let service: RecipeService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ RecipeService ]
    });
    service = TestBed.get(RecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
