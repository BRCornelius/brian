import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'recipe-instructions',
  templateUrl: './recipe-instructions.component.html',
  styleUrls: ['./recipe-instructions.component.css']
})
export class RecipeInstructionsComponent implements OnInit {

  constructor() { }

  ngOnInit() { console.log(this.instructions) }

  @Input() instructions: string[];
}
