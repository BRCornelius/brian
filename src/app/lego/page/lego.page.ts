import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services';
import { LegoService } from '../services/lego.service';
import { LegoSetPipe, SafePipe } from '../pipes';

@Component({
  selector: 'lego-page',
  templateUrl: './lego.page.html',
  styleUrls: ['./lego.page.css'],
  providers: [LegoSetPipe, SafePipe]
})
export class LegoPage implements OnInit {

  constructor(
    public auth: AuthService,
    public lego: LegoService
  ) { }

    // tslint:disable-next-line:max-line-length
  authInterstitial = 'https://assets.corneliuses.com/photos/common/interstitial-farouk.gif';
  dropdownLabel = 'Lego Sets';

  ngOnInit() {
    this.lego.getSets();
    if (!this.auth.authorized) {
      this.auth.isAuthorized();
    }
  }

}
