import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splashpage',
  templateUrl: './splashpage.component.html',
  styleUrls: ['./splashpage.component.css']
})
export class SplashPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  title: string = `Brian's Page`;
}
