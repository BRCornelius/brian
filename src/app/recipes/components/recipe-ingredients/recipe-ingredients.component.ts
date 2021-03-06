import { Component, Input } from '@angular/core';
import { IIngredient } from '../../models';

@Component({
  selector: 'recipe-ingredients',
  templateUrl: './recipe-ingredients.component.html',
  styleUrls: ['./recipe-ingredients.component.css']
})
export class RecipeIngredientsComponent {

  constructor() { }

  @Input() ingredients: IIngredient[];
}
