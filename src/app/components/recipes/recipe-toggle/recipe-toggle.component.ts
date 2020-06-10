import { Component, OnInit, Input } from '@angular/core';
import { IIngredient } from 'src/app/utilities/types';

@Component({
  selector: 'recipe-toggle',
  templateUrl: './recipe-toggle.component.html',
  styleUrls: ['./recipe-toggle.component.css']
})
export class RecipeToggleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  show: boolean = false;
  @Input() photo: string;
  @Input() instructions: string[];
  @Input() ingredients: IIngredient[];
  @Input() title: string;
}
