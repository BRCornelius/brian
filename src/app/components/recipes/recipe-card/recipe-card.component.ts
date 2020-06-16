import { Component, OnInit, Input } from '@angular/core';
import { RecipeService } from 'src/app/services/content/recipe.service';
import { IIngredient, IRecipeTime } from 'src/app/interfaces';

@Component({
  selector: 'recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent implements OnInit {

  constructor(private recipe: RecipeService) { }

  ngOnInit() {
  }

  @Input() photo: string;
  @Input() instructions: string[];
  @Input() ingredients: IIngredient[];
  @Input() time: IRecipeTime;
}
