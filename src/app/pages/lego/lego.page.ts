import { Component, OnInit } from '@angular/core';
import { LegoService, AuthService } from '../../services';
import { IUrl, ILegoSet } from 'src/app/interfaces';
import { LegoSetPipe, SafePipe } from 'src/app/pipes';

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
    if (this.auth.authorized) {
      this.lego.getSets();
    } else {
      this.auth.isAuthorized();
    }
  }

}
