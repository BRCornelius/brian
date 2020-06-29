import { Component, Input } from '@angular/core';
import { IIngredient } from 'src/app/interfaces';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'recipe-toggle',
  templateUrl: './recipe-toggle.component.html',
  styleUrls: ['./recipe-toggle.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        backgroundColor: 'gold',
        color: 'darkslateblue'
      })),
      state('closed', style({
        backgroundColor: 'darkslateblue'
      })),
      transition('open => closed', [
        animate('0.3s')
      ]),
      transition('closed => open', [
        animate('0.3s')
      ])
    ])
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
