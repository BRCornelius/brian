import { Component, Input } from '@angular/core';
import { IIngredient } from 'src/app/interfaces';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { openCloseRecipes } from '../../animations';

@Component({
  selector: 'recipe-toggle',
  templateUrl: './recipe-toggle.component.html',
  styleUrls: ['./recipe-toggle.component.css'],
  animations: [
    openCloseRecipes
  ]
})
export class RecipeToggleComponent {

  constructor() { }

  show = false;
  @Input() photo: string;
  @Input() instructions: string[];
  @Input() ingredients: IIngredient[];
  @Input() title: string;

  toggleShow: Function = () => this.show = !this.show;
}
