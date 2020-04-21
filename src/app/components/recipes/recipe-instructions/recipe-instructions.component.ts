import { Component, OnInit } from '@angular/core';
import { IInstruction } from '../../../utilities/types';

@Component({
  selector: 'app-recipe-instructions',
  templateUrl: './recipe-instructions.component.html',
  styleUrls: ['./recipe-instructions.component.css']
})
export class RecipeInstructionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  recipe: Array<IInstruction> = [{
    text: 'Preheat oven to 400˚.',
  },
  {
    text: 'Dice the tomatoes and mince the garlic.',
  },
  {
    text: 'Sautee spinach in a large pot with 1-tbsp olive oil, 1-tbsp of garlic over medium heat, and a pinch of salt and pepper.  For added deliciousness, add cooked bacon bits.',
  },
  {
    text: 'In a small bowl, mix 3-tbsp garlic with 1-tbsp olive oil and a pinch of salt and pepper.',
  },
  {
    text: 'Line a shallow baking pan with tin foil and coat with olive oil.  Then, place on the salmon.',
  },
  {
    text: 'Cut 1/4-inch slits all along the salmon.'
  },
  {
    text: 'Rub the oil and garlic mixture all over the salmon; making sure to fill as many of the slits with garlic chunks as possible.'
  },
  {
    text: 'Cover the salmon with the sauteed spinach.  Top with diced tomatoes and feta cheese.'
  },
  {
    text: 'Bake for 21-minutes',
  },
  {
    text: 'Let stand for 2 minutes before cutting and serving.'
  },
];
}
