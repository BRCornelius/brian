import { Component, Input } from '@angular/core';
import { IIngredient } from 'src/app/interfaces';

@Component({
  selector: 'recipe-toggle',
  templateUrl: './recipe-toggle.component.html',
  styleUrls: ['./recipe-toggle.component.css']
})
export class RecipeToggleComponent {

  constructor() { }

  show = false;
  @Input() photo: string;
  @Input() instructions: string[];
  @Input() ingredients: IIngredient[];
  @Input() title: string;

}
