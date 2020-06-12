import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services';

@Component({
  selector: 'splash-page',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.css']
})
export class SplashPage implements OnInit {

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.auth.isAuthorized();
  }

  isAuthorized: boolean = this.auth.authorized;
  title: string = `Brian's Page`;

  updateAuthorized: Function = () => {
    this.isAuthorized = true;
  }
}
