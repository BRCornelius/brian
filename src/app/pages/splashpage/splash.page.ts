import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'splash-page',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.css']
})
export class SplashPage implements OnInit {

  constructor(private auth: AuthService) {}

  isAuthorized: boolean = this.auth.authorized;
  title = `Brian's Page`;

  ngOnInit() {
    this.auth.isAuthorized();
  }

  handleAuthenticated: Function = (authorized): boolean => this.isAuthorized = authorized;
}
