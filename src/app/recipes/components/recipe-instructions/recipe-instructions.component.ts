import { Component, Input } from '@angular/core';

@Component({
  selector: 'recipe-instructions',
  templateUrl: './recipe-instructions.component.html',
  styleUrls: ['./recipe-instructions.component.css']
})
export class RecipeInstructionsComponent {

  constructor() { }

  @Input() instructions: string[];
}
