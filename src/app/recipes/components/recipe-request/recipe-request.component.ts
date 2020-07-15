import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IRecipeToTry } from '../../models';
import { RecipeService } from '../../services';
@Component({
  selector: 'recipe-request',
  templateUrl: './recipe-request.component.html',
  styleUrls: ['./recipe-request.component.css']
})
export class RecipeRequestComponent implements OnInit {

  constructor(private recipes: RecipeService) { }

  show: boolean;
  submitted: boolean;
  toTryForm: FormGroup;

  ngOnInit() {
    const title = new FormControl();
    const url = new FormControl();
    this.toTryForm = new FormGroup({title, url});
    this.submitted = false;
  }

  onSubmit: Function = (values: IRecipeToTry): void => {
    this.recipes.addToTry(values);
    this.submitted = true;
  }
}
