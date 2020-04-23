import { Component, OnInit, Input } from '@angular/core';
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

  @Input() instructions: Array<IInstruction>;
}
