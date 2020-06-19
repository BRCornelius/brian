import { Component, OnInit, Input } from '@angular/core';
import { IRecipe } from 'src/app/interfaces';
import { ListOrderPipe } from 'src/app/pipes';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  providers: [ListOrderPipe]
})
export class RecipeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input() recipes: IRecipe[];
}
