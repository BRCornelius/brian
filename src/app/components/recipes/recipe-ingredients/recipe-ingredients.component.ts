import { Component, OnInit, Input } from '@angular/core';
import { IIngredient } from '../../../utilities/types';

@Component({
  selector: 'app-recipe-ingredients',
  templateUrl: './recipe-ingredients.component.html',
  styleUrls: ['./recipe-ingredients.component.css']
})
export class RecipeIngredientsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() ingredients: IIngredient[];
}
