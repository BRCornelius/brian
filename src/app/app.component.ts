import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public auth: AuthService) {}
  ngOnInit() {
    this.auth.isAuthorized();
  }
}
