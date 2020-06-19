import { Component, OnInit, Input } from '@angular/core';
import { IIngredient } from '../../../interfaces';

@Component({
  selector: 'recipe-ingredients',
  templateUrl: './recipe-ingredients.component.html',
  styleUrls: ['./recipe-ingredients.component.css']
})
export class RecipeIngredientsComponent implements OnInit {

  constructor() { }

  @Input() ingredients: IIngredient[];

  ngOnInit() {
  }
}
