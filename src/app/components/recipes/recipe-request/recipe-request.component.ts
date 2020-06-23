import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RecipeService } from 'src/app/services';

@Component({
  selector: 'recipe-request',
  templateUrl: './recipe-request.component.html',
  styleUrls: ['./recipe-request.component.css']
})
export class RecipeRequestComponent implements OnInit {

  constructor(private recipes: RecipeService) { }

  ngOnInit() {
    let title = new FormControl();
    let url = new FormControl();
    this.toTryForm = new FormGroup({title, url});
    this.submitted = false;
  }

  @Output() handleSubmit:EventEmitter<any> = new EventEmitter();

  show:boolean;
  submitted:boolean;
  toTryForm: FormGroup;

  onSubmit: Function = (values): void => {
    const data = {
      title: values.title,
      url: values.url
    };
    this.recipes.addToTry(data);
    this.handleSubmit.emit(data);
    this.submitted = true;
  }
}
