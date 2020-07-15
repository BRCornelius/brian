import { Component, Input } from '@angular/core';
import { IRecipe, IRecipeToTry } from '../../models';
import { ListOrderPipe } from '../../pipes/list-order.pipe';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [ListOrderPipe]
})
export class RecipeListComponent {

  constructor() { }

  @Input() recipes: IRecipe[];
  @Input() toTry: IRecipeToTry[];

}
