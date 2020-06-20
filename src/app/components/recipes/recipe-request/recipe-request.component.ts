import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services';

@Component({
  selector: 'recipe-request',
  templateUrl: './recipe-request.component.html',
  styleUrls: ['./recipe-request.component.css']
})
export class RecipeRequestComponent implements OnInit {

  constructor(private email: EmailService) { }

  ngOnInit() {
    let title = new FormControl();
    let url = new FormControl();
    this.toTryForm = new FormGroup({title, url});
    this.submitted = false;
  }
  sendEmail: Function = this.email.sendEmail;
  show: boolean = false;
  submitted:boolean;
  toTryForm: FormGroup;

  onSubmit: Function = (values): void => {
    this.recipes.addToTry({
      title: values.title,
      url: values.url
    });
    this.submitted = true;
  }
}
