import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'splash-page',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.css']
})
export class SplashPage implements OnInit {

  constructor() {}

  ngOnInit() {}
  title: string = environment.test;
}
