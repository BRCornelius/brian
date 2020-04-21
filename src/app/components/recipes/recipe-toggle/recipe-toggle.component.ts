import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-toggle',
  templateUrl: './recipe-toggle.component.html',
  styleUrls: ['./recipe-toggle.component.css']
})
export class RecipeToggleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  show: boolean = false;
}
