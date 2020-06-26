import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RecipeService } from 'src/app/services';
import { IRecipeToTry } from 'src/app/interfaces';

@Component({
  selector: 'recipe-request',
  templateUrl: './recipe-request.component.html',
  styleUrls: ['./recipe-request.component.css']
})
export class RecipeRequestComponent implements OnInit {

  constructor(private recipes: RecipeService) { }

  @Output() handleSubmit: EventEmitter<any> = new EventEmitter();

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
    this.handleSubmit.emit(values);
    this.submitted = true;
  }
}
