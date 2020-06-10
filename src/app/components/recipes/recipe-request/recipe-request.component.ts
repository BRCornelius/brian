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
  }
  sendEmail: Function = this.email.sendEmail;
  show: boolean = false;
}
