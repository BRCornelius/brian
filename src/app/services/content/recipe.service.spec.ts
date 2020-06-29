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

  it('should get recipes', (done: DoneFn) => {
    service.getRecipes.subscribe(response => {
      expect(response.data.Items.length).toBeGreaterThanOrEqual(1);
      done();
    });
  });
});
