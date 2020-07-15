import { Component, Input } from '@angular/core';
import { RecipeService } from '../../services';
import { IIngredient, IRecipeTime } from '../../models';

@Component({
  selector: 'recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent {

  constructor(private recipe: RecipeService) { }

  @Input() photo: string;
  @Input() instructions: string[];
  @Input() ingredients: IIngredient[];
  @Input() time: IRecipeTime;

}
