import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'splash-page',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.css']
})
export class SplashPage implements OnInit {

  constructor() {}

  ngOnInit() {}
  title: string = `Brian's Page`;
}
