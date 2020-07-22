import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared';
import { slider } from './core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ slider ]
})
export class AppComponent implements OnInit {
  constructor(public auth: AuthService) {}
  ngOnInit() {
    this.auth.isAuthorized();
  }
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
