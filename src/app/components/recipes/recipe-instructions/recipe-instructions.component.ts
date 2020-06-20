import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'recipe-instructions',
  templateUrl: './recipe-instructions.component.html',
  styleUrls: ['./recipe-instructions.component.css']
})
export class RecipeInstructionsComponent implements OnInit {

  constructor() { }

  @Input() instructions: string[];

  ngOnInit() {}
}
